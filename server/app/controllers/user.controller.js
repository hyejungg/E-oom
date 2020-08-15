const bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.signUp = async(req, res) => {
   // Validate request
   if (!req.body.user_email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const hashedPassword = await bcrypt.hash(req.body.user_pw, 12);
  // Create a Tutorial
  const user = {
      user_fname : req.body.user_fname,
      user_lname : req.body.user_lname,
      user_email : req.body.user_email,
      user_pw : hashedPassword,
      user_birthdate : req.body.user_birthdate,
      user_phone : req.body.user_phone
  };
  // Save Tutorial in the database
  await User.create(user)
    .then(data=>{
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.signIn = async (req, res) => {
  const { user_email, user_pw } = req.body;
  // email 존재 x
  try {
    const user = await User.findOne({
      where: {
        user_email
      }
    });

    if (!user) {
      res.send("user_email wrong");
      return;
    }

    const isMatch = await bcrypt.compare(user_pw, user.user_pw);

    if (isMatch) {
      res.send(user);
    }else{
      res.send("user_pw wrong");
    }

  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    });
  }
};

//Check email if it's exist
exports.isValidID = async(req, res) =>{
  const { user_email} = req.params;
  await User.findOne({
      attributes : ['user_num'],
      where: {
        user_email:user_email
      }
    }).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}

exports.findID = async(req,res) =>{
  const {user_fname,user_lname,user_phone} = req.body;
  await User.findOne({
    attributes:['user_email'],
    where:{
      user_fname :user_fname,
      user_lname : user_lname,
      user_phone : user_phone
    }
  }).then(data =>{
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
}
exports.getAll = async(req,res) =>{
  await User.findAll()
  .then(data =>{
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
}
exports.checkPW = async(req,res)=>{
  const {user_num, user_pw} = req.body;
  try {
    const user = await User.findOne({
      attributes:["user_pw"],
      where:{user_num:user_num}
    });

    const isMatch = await bcrypt.compare(user_pw, user.user_pw);

    if (isMatch) {
      res.send({success : true});
    }else{
      res.send({success : false});
    }

  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    });
  }
}
exports.getOne = async(req,res) =>{
  const {user_num} = req.params;
  await User.findByPk(user_num,{
    attributes : ["user_email","user_fname","user_lname","user_birthdate","user_phone"]
  })
  .then(data =>{
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
}
exports.updateUser = async (req, res, next) => {
  const { user_num , user_fname, user_lname, user_birthdate, user_phone } = req.body;
  try {    
        await User.update(
          {
              user_fname: user_fname,
              user_lname: user_lname,
              user_birthdate : user_birthdate,
              user_phone : user_phone
          },
          {
            where :{
              user_num : user_num
            }
          }
        ).then(data=>{
          res.send(data);
        });
      
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    });
  }
};
exports.updatePW = async(req,res)=>{
  const {user_num, cur_user_pw,new_user_pw} = req.body;
  try {
    const user = await User.findByPk(user_num,{
      attributes:["user_pw"]
    });

    const isMatch = await bcrypt.compare(cur_user_pw, user.user_pw);

    if (isMatch) {
      const hashedPassword = await bcrypt.hash(new_user_pw, 12);
      await User.update(
        {
            user_pw : hashedPassword
        },
        {
          where :{
            user_num : user_num
          }
        }
      ).then(data=>{
        res.send(data);
      });
    }else{
      res.send("user_pw wrong");
    }

  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    });
  }
}

// const User = require("../models/user.model.js");

// //sign in
// exports.signIn = (req,res) =>{
//   if (!req.body.user_email) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }
//   User.getOneByEmail(req.body.user_email,(err,data)=> {
//     if(err){
//       res.status(500).send({
//         message:
//               err.message || "Some error occurred while Retreiving the User."
//       });
//     }else{
//       if(data.length===0) res.send("user_email wrong");
//       else if(req.body.user_pw !== data[0].user_pw)res.send("user_pw wrong");
//       else res.send(data);
//     }
//   });
// }

// //sign up
// exports.signUp = (req, res) => {
//   // Validate request
//   if (!req.body.user_fname) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }
//   // Create a User
//   const user = {
//       user_fname : req.body.user_fname,
//       user_lname : req.body.user_lname,
//       user_email : req.body.user_email,
//       user_pw : req.body.user_pw,
//       user_birthdate : req.body.user_birthdate,
//       user_phone : req.body.user_phone,
//   };
//   User.create(user, (err, data) => {
//         if (err)
//           res.status(500).send({
//             message:
//               err.message || "Some error occurred while creating the User."
//           });
//         else res.send(data);
//       });
//   };


// //Check email if it's exist
// exports.isValidID = (req, res) =>{
//   User.getNumByEmail(req.params.user_email,(err,data) => {
//     if (err) {
//         res.status(500).send({
//           message: "Error retrieving User with email " + req.params.user_email
//         });
//     }else res.send(data);
//   });
// }


// //Create and Save a new User
// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.user_fname) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return;
//     }
//     // Create a User
//     const user = {
//         user_fname : req.body.user_fname,
//         user_lname : req.body.user_lname,
//         user_email : req.body.user_email,
//         user_pw : req.body.user_pw,
//         user_birthdate : req.body.user_birthdate,
//         user_phone : req.body.user_phone,
//     };
//     User.create(user, (err, data) => {
//           if (err)
//             res.status(500).send({
//               message:
//                 err.message || "Some error occurred while creating the User."
//             });
//           else res.send(data);
//         });
//   };
  
//   // Retrieve all Users from the database.
//   exports.findAll = (req, res) => {
//       User.getAll((err, data) => {
//           if (err)
//             res.status(500).send({
//               message:
//                 err.message || "Some error occurred while retrieving users."
//             });
//           else res.send(data);
//         });
//   };
  
//   // Get the Description of the title
//   exports.findByEmail = (req, res) => {
//     User.getOneByEmail(req.params.user_email, (err, data) => {
//       if (err) {
//           res.status(500).send({
//             message: "Error retrieving User with email " + req.params.user_email
//           });
//       }else res.send(data);
//     });
//   };

//   exports.findByNum = (req, res) => {
//     User.getOne(req.params.user_num, (err, data) => {
//       if (err) {
//           res.status(500).send({
//             message: "Error retrieving User with num " + req.params.user_num
//           });
//       }else res.send(data);
//     });
//   };

//   exports.updateAll = (req,res) => {
//        // Validate request
//        if (!req.body.user_num) {
//         res.status(400).send({
//           message: "Content can not be empty!"
//         });
//         return;
//       }
//       // Create a User
//       const user = {
//           user_num : req.body.user_num,
//           user_fname : req.body.user_fname,
//           user_lname : req.body.user_lname,
//           user_email : req.body.user_email,
//           user_pw : req.body.user_pw,
//           user_birthdate : req.body.user_birthdate,
//           user_phone : req.body.user_phone,
//       };
//       User.update(user, (err, data) => {
//             if (err)
//               res.status(500).send({
//                 message:
//                   err.message || "Some error occurred while creating the User."
//               });
//             else res.send(data);
//           });
//   }