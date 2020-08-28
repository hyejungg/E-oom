const bcrypt = require("bcryptjs");
const config = require("../config/auth.config");
const db = require("../models");
const uuid = require('uuid');
const jwt = require("jsonwebtoken");
const { DataTypes, Sequelize, UUIDV1, UUID, UUIDV4 } = require("sequelize");
const Lecture = db.lecture;
const Op = db.Sequelize.Op;


// Create and Save a new Lecture
exports.createLecture = async(req, res) => {
  // Create a Lecture
  const lecture = {
    lecture_title : req.body.lecture_title,
    host_num : req.user_num,
    lecture_available : false,
    lecture_capacity: req.body.lecture_capacity,
    lecture_full : false,
    lecture_id : uuid.v4(),
    lecture_pw : bcrypt.hashSync(req.body.lecture_pw, 12),
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
      res.status(500).send({
        message:
        err.message || "createLecture_500Error"
      });
  });
};

//Get the list of lectures with user_num(host_num)
exports.readLectures = async (req, res) =>{
  if(req.query.type === 'id'){
    //console.log("id");
    var condition = {where: {lecture_id: req.query.keyword}};
  }else if(req.query.type === 'title'){
    //console.log("title");
    var condition = {where: {host_num : req.user_num, lecture_title: {[Op.like] : "%" + req.query.keyword + "%"}}};
  }else if(req.query.length === undefined){
    //console.log("Read all");
    var condition = {where : {host_num : req.user_num}};
    //var condition = {}; //For Test
  }else{
    res.status(400).send({
      message: "'type' must be id or title, input keyword"
    });
  }
  
  await Lecture.findAll(condition)
  .then(data => {
    res.status(200).json(data);
  }).catch(err => {
    res.status(500).send({
      message : "Error occurred"
    });
  })
};

exports.deleteAllLecture = async(req, res) => {
  Lecture.destroy({
    where : {
      host_num : req.user_num
    },
    truncate : false
  })
  .then(num => {
    if(num == 1) {
      res.status(204).send({
        message : `Lecture was deleted successfully (lecture_num:${req.params.lecture_num})`
      });
    }else{
      res.status(409).send({
        message : `Wrong input of host_num/lecture_num, or There is no matched pair between (lecture_num:${req.params.lecture_num}, host_num:${req.user_num}`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message : `Could not delete the lecture (lecture_num:${req.params.lecture_num})`
    });
  })
}

exports.deleteLecture = async (req, res) => {
  await Lecture.destroy({
    where : {
      host_num : req.user_num,
      lecture_num : req.params.lecture_num  
    }
  })
  .then(num => {
    if(num == 1) {
      res.status(204).send({
        message : `Lecture was deleted successfully (lecture_num:${req.params.lecture_num})`
      });
    }else{
      res.status(409).send({
        message : `Wrong input of host_num/lecture_num, or There is no matched pair between (lecture_num:${req.params.lecture_num}, host_num:${req.user_num}`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message : `Could not delete the lecture (lecture_num:${req.params.lecture_num})`
    });
  }) 
};

exports.updateLectureInfo = async (req, res) => {
  await Lecture.update(req.body, {
    where: {
      lecture_num: req.params.lecture_num,
      host_num: req.user_num
    }
  })
  .then(num => {
    if(num == 1){
      res.status(200).send({
        message : `Lecture was updated successfully. (lecture_num : ${req.params.lecture_num}`
      });
    }else{
      res.status(409).send({
        message : `Could not update Lecture with lecture_num : ${req.params.lecture_num}, user_num : ${req.user_num}. Maybe req.body is empty or lecture was not found`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message : `Could not update the lecture (lecture_num : ${req.params.lecture_num})`
    });
  });
};