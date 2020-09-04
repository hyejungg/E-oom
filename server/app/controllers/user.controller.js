const bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

//Get all user Informaitons
exports.getAll = async(req,res) =>{
  await User.findAll()
  .then(data =>{
    res.status(200).send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving users."
    });
  });
}
//Find Email with user Info
exports.findID = async(req,res) =>{
  const {user_fname,user_lname,user_phone,user_birthdate} = req.body;
  await User.findOne({
    attributes:['user_email'],
    where:{
      user_fname :user_fname,
      user_lname : user_lname,
      user_phone : user_phone,
      user_birthdate : user_birthdate
    }
  }).then(data =>{
    if(data){
      data.dataValues.success = true;
      res.status(200).send(data);
    }else{
      res.status(200).send({success:false});
    }
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while findinf the email."
    });
  });
}
//check informaiton 
exports.checkInfo = async(req,res)=>{
  const {user_email, user_phone} = req.body;

  await User.findOne({
    attributes:["user_num"],
    where:{user_email:user_email,
              user_phone:user_phone}
    }).then(data=>{
      if(data){
        data.dataValues.success = true;
        res.status(200).send(data);
      }else{
        res.status(200).send({success:false});
      }
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while checking user info."
    });
  });
}
//set new password
exports.newPW = async (req, res, next) => {
  const { user_num , user_pw} = req.body;
  const hashedPassword = await bcrypt.hash(user_pw, 12);
  try {    
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
          if(data == 0){
            res.status(200).send({success:false})
          }else{
            res.status(200).send({success:true});
          }
        });
      
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while setting new pw."
    });
  }
};


//Check password 
exports.checkPW = async(req,res)=>{
  const user_num = req.user_num;
  const {user_pw} = req.body;
  try {
    const user = await User.findOne({
      attributes:["user_pw"],
      where:{user_num:user_num}
    });

    const isMatch = await bcrypt.compare(user_pw, user.user_pw);

    if (isMatch)res.send({success : true});
    else res.send({success : false});
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while checking the pw."
    });
  }
}
//get a user information
exports.getOne = async(req,res) =>{
  const user_num = req.user_num;
  await User.findByPk(user_num,{
    attributes : ["user_num","user_nickname","user_email","user_fname","user_lname","user_birthdate","user_phone"]
  })
  .then(data =>{
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while get the user."
    });
  });
}
//update a user
exports.updateUser = async (req, res, next) => {
  const user_num = req.user_num;
  const { user_nickname, user_fname, user_lname, user_birthdate, user_phone } = req.body;
  try {    
        await User.update(
          {
              user_fname: user_fname,
              user_lname: user_lname,
              user_nickname : user_nickname,
              user_birthdate : user_birthdate,
              user_phone : user_phone
          },
          {
            where :{
              user_num : user_num
            }
          }
        ).then(data=>{
          if(data == 0){
            res.status(200).send({success:false})
          }else{
            res.status(200).send({success:true});
          }
        });
      
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while updating the user info."
    });
  }
};
//update password
exports.updatePW = async(req,res)=>{
  const user_num = req.user_num;
  const {cur_user_pw,new_user_pw} = req.body;
  try {
    const user = await User.findByPk(user_num,{
      attributes:["user_pw"]
    });

    const isMatch = await bcrypt.compare(cur_user_pw, user.user_pw);
    if(!isMatch){
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    const hashedPassword = await bcrypt.hash(new_user_pw, 12);
    await User.update(
      {user_pw : hashedPassword},
      {where :{user_num : user_num}}
    ).then(data=>{
      if(data == 0){
        res.status(200).send({success:false})
      }else{
        res.status(200).send({success:true});
      }
    });
   
    

  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while updating the pw."
    });
  }
}

