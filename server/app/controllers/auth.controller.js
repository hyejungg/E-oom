const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//register the user
exports.signup = async(req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.user_pw, 12);
  // Save User to Database
  await User.create({
    user_fname : req.body.user_fname,
    user_lname : req.body.user_lname,
    user_email : req.body.user_email,
    user_nickname : req.body.user_nickname,
    user_pw : hashedPassword,
    user_birthdate : req.body.user_birthdate,
    user_phone : req.body.user_phone
  })
    .then(()=>{
        res.send({message: "User was registered successfully"});
      })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

//Check Nickname if it's exist
exports.isValidNick = async(req, res) =>{
  const { user_nickname} = req.params;
  await User.findOne({
      attributes : ['user_num'],
      where: {
        user_nickname:user_nickname
      }
    }).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while checking the email."
      });
    });
}

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
          err.message || "Some error occurred while checking the email."
      });
    });
}
exports.signin = async(req, res) => {
    const { user_email, user_pw } = req.body;
  await User.findOne({
    where: {
      user_email: user_email
    }
  })
    .then (async(user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      const isMatch = bcrypt.compareSync(user_pw, user.user_pw);
      console.log("match");
      if (!isMatch) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      console.log("token");
      var token = jwt.sign({ id: user.user_num }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

        res.status(200).send({
          user_nickname: user.user_nickname,
          user_email: user.user_email,
          accessToken: token
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};