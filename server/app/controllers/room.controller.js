const db = require("../models");
const moment = require('moment');
const Lecture = db.lecture;
const Room = db.room;
const Participation = db.participation;
const Enrollment = db.enrollment;
const shortid = require('shortid');
// Create and Save a new Room
exports.createRoom = async (req, res) => {
  // Validate request 
  if (!req.body.lecture_num) {
    res.status(400).send({
      message: "Content can not be empty"
    });
    return;
  }
  try {
    const options = await Lecture.findByPk(req.body.lecture_num, {
      attributes: ["user_num","init_mute_authority", "init_chat_authority", "init_save_authority", "init_notification"]
    });
    if(options.user_num===req.user_num){
    await Room.create({
      room_title: req.body.room_title,
      room_link: shortid.generate(),
      option_mute_authority: options.init_mute_authority,
      option_chat_authority: options.init_chat_authority,
      option_save_authority: options.init_save_authority,
      option_notification: options.init_notification,
      lecture_num: req.body.lecture_num,
      room_start: req.body.room_startdate + " " + req.body.room_starttime,
      room_recursion: req.body.room_recursion,
      room_reminder: req.body.room_reminder,
    })
      .then(() => {
        res.status(200).send({ message: "Room was registered successfully" });
      })
    }else{
      res.status(200).send({ message: "Host only can create a room" });
    }


  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while get the user."
    });
  }
};
exports.getRooms = async (req, res) => {
  const { lecture_num } = req.params;
  await Room.findAll({
    attributes: ['room_start', 'room_title', 'room_num'],
    where: {
      lecture_num: lecture_num,
      room_end: null
    }
  })
    .then(data => {
      res.status(200).send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
  });
};

exports.joinRoom = async (req, res) => {
  const { room_num } = req.body;
  const user_num = req.user_num;
  try {
    const { lecture_num } = await Room.findByPk(room_num, {
      attributes: ['lecture_num']
    })
    const host = await Lecture.findByPk(lecture_num, {
      attributes: ['user_num']
    });
    if (host.user_num === user_num) {
      const options = await Lecture.findByPk(lecture_num, {
        attributes: ["init_mute_authority", "init_chat_authority", "init_save_authority", "init_notification"]
      });
      await Room.update({
        option_mute_authority: options.init_mute_authority,
        option_chat_authority: options.init_chat_authority,
        option_save_authority: options.init_save_authority,
        option_notification: options.init_notification,
        room_activate: true,
        room_start: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      },
        {
          where: {
            room_num: room_num
          }
        });

      await Participation.update({
        participation_chat: options.init_chat_authority
      },
        {
          where: {
            room_num: room_num
          }
        })

      await Participation.create({
        participation_ishost: true,
        participation_sharing: true,
        participation_annotation: true,
        participation_chat: true,
        room_num: room_num,
        user_num: user_num
      });

    } else {
      const count = await Enrollment.count({ where: { user_num: user_num, lecture_num: lecture_num } });
      console.log(count);
      if (count > 0) {
        const options = await Lecture.findByPk(lecture_num, {
          attributes: ["init_chat_authority"]
        });
        await Participation.create({
          participation_ishost: false,
          participation_chat: options.init_chat_authority,
          room_num: room_num,
          user_num: user_num
        });
      } else {
        res.status(200).send({ 
          success: false,
          message : "You are not enrolled in the lecture"  }
        );
        return;
      }

    }
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while join the room."
    });
  }

  await Room.findByPk(room_num, {
    attributes: ['room_title', 'room_link', 'room_activate', 'option_mute_authority', 'option_chat_authority', 'option_save_authority', 'option_notification', 'option_lock']
  }).then(data => {
    res.status(200).send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving the room."
    });
  });
}
exports.leaveRoom = async (req, res) => {
  const { room_num } = req.body;
  const user_num = req.user_num;
  try {
    const { participation_ishost } = await Participation.findOne({
      attributes: ['participation_ishost'],
      where:{
        user_num:user_num,
        room_num:room_num
      }
    })
    if (participation_ishost) {
      await Participation.destroy({
        where: { room_num: room_num }
      });
      await Room.update({
        room_activate: false,
        room_end: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      },{
      where:{
        room_num:room_num
      }});
      const room = await Room.findByPk(room_num, {
        attributes: ['room_recursion', 'room_start', 'room_title', 'room_reminder', 'lecture_num']
      });
      if (room.room_recursion !== "Never") {
        let starttime = "";
        if (room.room_recursion === "Every Month") {
          starttime = moment(room.room_start).add(1, 'months').format('YYYY-MM-DD HH:mm');
        } else if (room.room_recursion === "Every Year") {
          starttime = moment(room.room_start).add(1, 'years').format('YYYY-MM-DD HH:mm');
        } else {
          switch (room.room_recursion) {
            case "Every Day":
              days = 1;
              break;
            case "Every Week":
              days = 7;
              break;
            case "Every 2 Weeks":
              days = 14;
          }
          starttime = moment(room.room_start).add(days, 'days').format('YYYY-MM-DD HH:mm');
        }
        console.log(room.lecture_num);
        const options = await Lecture.findByPk(room.lecture_num, {
          attributes: ["init_mute_authority", "init_chat_authority", "init_save_authority", "init_notification"]
        });

        await Room.create({
          room_title: room.room_title,
          room_link: shortid.generate(),
          option_mute_authority: options.init_mute_authority,
          option_chat_authority: options.init_chat_authority,
          option_save_authority: options.init_save_authority,
          option_notification: options.init_notification,
          lecture_num: room.lecture_num,
          room_start: moment(starttime).format('YYYY-MM-DD HH:mm:ss'),
          room_recursion: room.room_recursion,
          room_reminder: room.room_reminder,
        })
          .then(() => {
            res.status(200).send({ message: "Room was ended and New room was registered successfully" });
          })
      } else {
        res.status(200).send({ message: "Room was ended successfully" });
      }
    } else {
      await Participation.destroy({
        where: {
          room_num: room_num,
          user_num: user_num
        }
      }).then(() => {
        res.status(200).send({ message: "Your have leaved the room" });
      });
    }
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while leave the room."
    });
  }
}