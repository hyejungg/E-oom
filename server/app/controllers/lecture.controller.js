const bcrypt = require("bcryptjs");
const config = require("../config/auth.config");
const db = require("../models");
const uuid = require('uuid');
const jwt = require("jsonwebtoken");
const { DataTypes, Sequelize, UUIDV1, UUID, UUIDV4 } = require("sequelize");
const Lecture = db.lecture;
const Op = db.Sequelize.Op;

function verifyToken(req){
  try{
    if(typeof req.headers['x-access-token'] !== "undefined"){
      const token = req.headers['x-access-token'];
      //console.log(token);
      console.log("Verified");
      return jwt.verify(token, config.secret).id;
    }else{
      return undefined;
    }
  }catch(err){
    return undefined;
  }
}

// Create and Save a new Lecture
exports.createLecture = async(req, res) => {
   // Validate request 
  if (!req.body) {
    res.status(400).send({
      message: "createLecture_400Error"
    });
  }

  const host_num = verifyToken(req);

  if(host_num === undefined){
    res.status(401).send({message : "Unauthorized Token"});
  }

  // Create a Lecture
  const lecture = {
    lecture_title : req.body.lecture_title,
    host_num : host_num,
    host_nickname : req.body.host_nickname,
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
  const user_num = verifyToken(req);

  if(user_num === undefined){
    res.status(401).send({message : "Unauthorized Token"});
  }

  if(req.query.type === 'id'){
    //console.log("id");
    var condition = {where: {lecture_id: req.query.keyword}};
  }else if(req.query.type === 'title'){
    //console.log("title");
    var condition = {where: {host_num : user_num, lecture_title: {[Op.like] : "%" + req.query.keyword + "%"}}};
  }else if(req.query.length === undefined){
    //console.log("Read all");
    var condition = {where : {host_num : user_num}};
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
    res.send("Error occurred");
    //console.log(err);
  })
};
exports.deleteAllLecture = async(req, res) => {
  const host_num = verifyToken(req);

  if(host_num === undefined){
    res.status(401).send({"message" : "Unauthorized Token"});
  }

  try{
    await Lecture.destroy({
      where : {
        host_num : host_num
      }
    })
  }catch(err){
    
  }
}

exports.deleteLecture = async (req, res) => {
  const host_num = verifyToken(req);

  if(host_num === undefined){
    res.status(401).send({"message" : "Unauthorized Token"});
  }
  try{
      const isvalid = await Lecture.destroy({
        where : {
          host_num : host_num,
          lecture_num : req.params.lecture_num  
        }
      })

      if(isvalid === 0){
        res.status(409).send({"message" : "Wrong input of host_num/lecture_num, or There is no matched pair between them"});
      }
      res.send(204);
  }catch(err){

  }
};

exports.updateLectureInfo = async (req, res) => {
  const host_num = verifyToken(req);

  if(host_num === undefined){
    res.status(401).send({message : "Unauthenticated Token"});
  }

  try{
    //console.log(req);
    const [numberofrows, rows]  = await Lecture.update(
    {    
      lecture_title : req.body.lecture_title,
      lecture_capacity: req.body.lecture_capacity,
      lecture_private : req.body.lecture_private,
      init_mute_authority : req.body.init_mute_authority,
      init_chat_authority : req.body.init_chat_authority,
      init_save_authority : req.body.init_save_authority,
      init_notification : req.body.init_notification
    },{
      where: {
        lecture_num: req.params.lecture_num,
        host_num: host_num
      }
    })
    if(numberofrows === 0){
      res.status(409).send({"message" : "There is no matched host_num and lecture_num"});
    }
    //console.log(updatedlecture);
    res.status(200).send();
  }catch(err){
    res.send(err);
  }
};