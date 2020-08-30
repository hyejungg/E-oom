const db = require("../models");
const Lecture = db.lecture;
const Room = db.room;
const Schedule = db.schedule;
const Op = db.Sequelize.Op;
// Create and Save a new Room
exports.createRoom = async(req, res) => {
   // Validate request 
  if (!req.body.lecture_num) {
    res.status(400).send({
      message: "Content can not be empty"
    });
    return;
  }
  try{
      console.log(req.body);
    const options = await Lecture.findByPk(req.body.lecture_num,{
        attributes : ["init_mute_authority","init_chat_authority","init_save_authority","init_notification","host_num"]
    });
    console.log(options);
    await Room.create({
        room_title : req.body.room_title,
        room_link : "temp-link",
        option_mute_authority : options.init_mute_authority,
        option_chat_authority : options.init_chat_authority,
        option_save_authority : options.init_save_authority,
        option_notification : options.init_notification,
        lecture_num : req.body.lecture_num,
        room_start : req.body.room_start,
        room_recursion : req.body.room_recursion,
        room_reminder : req.body.room_reminder,
    })
    .then(()=>{
        res.status(200).send({message: "Room was registered successfully"});
    })
    

  }catch(err){
    res.status(500).send({
        message:
          err.message || "Some error occurred while get the user."
      });
  }
};
