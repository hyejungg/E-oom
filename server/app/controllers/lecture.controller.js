const bcrypt = require("bcryptjs");
const db = require("../models");
const { DataTypes, Sequelize, UUIDV1, UUID, UUIDV4 } = require("sequelize");
const Lecture = db.lecture;
const Op = db.Sequelize.Op;
const uuid = require('uuid');

// Create and Save a new Lecture
exports.createLecture = async(req, res) => {
   // Validate request 
  if (!req.body) {
    res.status(400).send({
      message: "createLecture_400Error"
    });
    return;
  }

  // Create a Lecture
  const lecture = {
    lecture_title : req.body.lecture_title,
    host_num : req.body.host_num,
    host_nickname : req.body.host_nickname,
    lecture_available : false,
    lecture_capacity: req.body.lecture_capacity,
    lecture_full : false,
    lecture_id : uuid.v4(),
    lecture_pw : req.body.lecture_pw,
    lecture_private : req.body.lecture_private,
    init_mute_authority : req.body.init_mute_authority,
    init_chat_authority : req.body.init_chat_authority,
    init_save_authority : req.body.init_save_authority,
    init_notification : req.body.init_notification
  };

  // Save Lecture in the database
  await Lecture.create(lecture)
    .then(data=>{
      //res.send(lecture); //for test
      res.status(201).json(lecture);
    })
    .catch(err => {      
      //console.log("500 Error while create the lecture");
      res.status(500).send({
        message:
        err.message || "createLecture_500Error"
      });
  });
};

//Get the list of lectures with user_num(host_num)
exports.readLectures = async (req, res) =>{
  //console.log(req.query);
  //console.log(req);
  //console.log(req.query.length);
  if(req.query.type === 'id'){
    //console.log("id");
    var condition = {where: {lecture_id: req.query.keyword}};
  }else if(req.query.type === 'title'){
    //console.log("title");
    var condition = {where: {lecture_title: {[Op.like] : "%" + req.query.keyword + "%"}}};
  }else if(req.query.length === undefined){
    console.log("Read all");
    var condition = {};
  }else{
    res.status(400).send({
      message: "'type' must be id or title, input keyword"
    });
  }

  await Lecture.findAll(condition)
  .then(data => {
    res.status(200).json(data);
  }).catch(err => {
    res.send("Error occurred");
    //console.log(err);
  })
};

exports.deleteAllLectures = async (req, res) => {
  await Lecture.destroy({
    truncate:true
  })
  res.send(200);
  //console.log("Deleted succesfully");
};

exports.updateLecture = async (req, res) => {
  const lecture = await Lecture.findOne({
    lecture_num: req.body.lecture_num
  })
  lecture.update({
    lecture_title: req.body.lecture_title
  })
  res.send(200);
};