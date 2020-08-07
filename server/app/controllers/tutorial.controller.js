const Customer = require("../models/tutorial.model.js");
const Tutorial = require("../models/tutorial.model.js");

// const db = require("../models");
// const Tutorial = db.tutorials;
// const Op = db.Sequelize.Op;


// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Tutorial
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };
  Tutorial.create(tutorial, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Customer."
          });
        else res.send(data);
      });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Tutorial.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
};

// Get the Description of the title
exports.check = (req, res) => {
  console.log("controller" + req.params.title);
  Tutorial.getDesc(req.params.title, (err, data) => {
    console.log(data);
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.title}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tutorial with id " + req.params.title
        });
      }
    } else res.send(data);
  });
};

