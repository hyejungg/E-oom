const User = require("../models/user.model.js");

//Create and Save a new User
exports.create = (req, res) => {
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
  
  // Retrieve all Users from the database.
  exports.findAll = (req, res) => {
      User.getAll((err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving users."
            });
          else res.send(data);
        });
  };
  
  // Get the Description of the title
  exports.findPW = (req, res) => {
    User.getPW(req.params.user_email, (err, data) => {
      if (err) {
          res.status(500).send({
            message: "Error retrieving User with email " + req.params.user_email
          });
      }
       else res.send(data);
    });
  };