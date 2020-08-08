const sql = require("./db.js");

const User = function(user) {
  this.user_fname = user.user_fname;
  this.user_lname = user.user_lname;
  this.user_email = user.user_email;
  this.user_pw = user.user_pw;
  this.user_birthdate = user.user_birthdate;
  this.user_phone = user.user_phone;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO user (user_num,user_fname,user_lname,user_email,user_pw,user_birthdate,user_phone,user_join) VALUES (DEFAULT,?,?,?,?,?,?,now())", 
    [newUser.user_fname,newUser.user_lname,newUser.user_email,newUser.user_pw,newUser.user_birthdate,newUser.user_phone], (err, res) => {
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("created user : ",{ id: res.insertId, ...newUser});
        result(null,{ user_num: res.insertId, ...newUser});
  });
};

User.getAll = result => {
  sql.query("SELECT * FROM user", (err, res) => {
    if(err){
        console.log("error: ",err);
        result(err,null);
    }
    console.log("users: ", res);
    result(null, res);
  });
};

User.getOne = (user_num, result) => {
    sql.query("SELECT * FROM user WHERE user_num = ?", user_num, (err, res) => {
    if(err){
        console.log("error: ",err);
        result(err,null);
        return;
    }
    console.log("user: ", res);
    result(null, res);
  });
};

User.getPW = (user_email, result) => {
    sql.query("SELECT user_pw FROM user WHERE user_email = ?", user_email, (err, res) => {
    if(err){
        console.log("error: ",err);
        result(err,null);
        return;
    }
    console.log("user pw: ", res);
    result(null, res);
  });
};



module.exports = User;