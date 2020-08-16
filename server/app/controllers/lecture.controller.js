const bcrypt = require("bcryptjs");
const db = require("../models");
const Lecture = db.lecture;
const Op = db.Sequelize.Op;
// Create and Save a new Lecture
exports.createLecture = async(req, res) => {
   // Validate request 
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
    // Create a Lecture
  const lecture = {
    lecture_title : req.body.lecture_title,
    host_num : req.body.host_num,
    lecture_available : false,
    lecture_capacity: req.body.lecture_capacity,
    lecture_full : false,
    init_private : req.body.init_private,
    init_mute_authority : req.body.init_mute_authority,
    init_chat_authority : req.body.init_chat_authority,
    init_save_authority : req.body.init_save_authority,
    init_notification : req.body.init_notification
  };

  // Save Tutorial in the database
  await Lecture.create(lecture)
    .then(data=>{
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Lecture."
      });
  });
};

exports.getAllLecture = async (req, res) =>{
  const host_num = req.body.user_num;
  try{
    const lectures = await Lecture.findAll({
      where: {
        host_num: host_num
      }
    })
    if(lectures.length === 0){
      res.send("Lecture_list_null");
    }else{
      res.send(lectures);
      console.log("Successfully got the list of lectures");
    }
    /*.then((data) => {
      res.send(data[0].dataValues);
      for(var i=0; i<3; i++){
        console.log(data[0].dataValues);
      }      
      console.log("Retrieve Successfully");
    });*/
  }catch(err){
    res.stats(500).send({
      message:
        err.message || "Some error occurred while getiing all the lectures with user id"
    })
  }
};

exports.searchLecture = async(req, res) => {
  const lecture_title = req.body.lecture_title;
  const host_num = req.body.user_num;
  try{
    await Lecture.findOne({
      where:{
        host_num: host_num,
        lecture_title: lecture_title
      }
    })
    .then((data)=>{
      res.send(data);
    });
  }catch(err){

  }
};