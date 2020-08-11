const User = require("../models/user.model.js");

//sign in
exports.signIn = (req,res) =>{
  if (!req.body.user_email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  User.getOneByEmail(req.body.user_email,(err,data)=> {
    if(err){
      res.status(500).send({
        message:
              err.message || "Some error occurred while Retreiving the User."
      });
    }else{
      if(data.length===0) res.send("user_email wrong");
      else if(req.body.user_pw !== data[0].user_pw)res.send("user_pw wrong");
      else res.send(data);
    }
  });
}

//sign up
exports.signUp = (req, res) => {
  // Validate request
  if (!req.body.user_fname) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a User
  const user = {
      user_fname : req.body.user_fname,
      user_lname : req.body.user_lname,
      user_email : req.body.user_email,
      user_pw : req.body.user_pw,
      user_birthdate : req.body.user_birthdate,
      user_phone : req.body.user_phone,
  };
  User.create(user, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        else res.send(data);
      });
  };


//Check email if it's exist
exports.isValidID = (req, res) =>{
  User.getNumByEmail(req.params.user_email,(err,data) => {
    if (err) {
        res.status(500).send({
          message: "Error retrieving User with email " + req.params.user_email
        });
    }else res.send(data);
  });
}


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