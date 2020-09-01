const db = require("../models");
const Lecture = db.lecture;
const Room = db.room;
// const Participation = db.Participation;
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
      attributes: ["init_mute_authority", "init_chat_authority", "init_save_authority", "init_notification"]
    });

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
    const { host_num } = await Lecture.findByPk(lecture_num, {
      attributes: ['user_num']
    });
    if (host_num === user_num) {
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

      // await Participation.update({
      //   participation_chat: options.init_chat_authority
      // },
      //   {
      //     where: {
      //       room_num: room_num
      //     }
      //   })

      // await Participation.create({
      //   participation_ishost: true,
      //   participation_sharing: true,
      //   participation_annotation: true,
      //   participation_chat: true,
      //   room_num: room_num,
      //   user_num: user_num
      // });

    } else {
      const count = await Enrollment.count({ where: { user_num: user_num, lecture_num: lecture_num } });
      console.log(count);
      if (count > 0) {
        const options = await Lecture.findByPk(lecture_num, {
          attributes: ["init_chat_authority"]
        });
        // await Participation.create({
        //   participation_ishost: false,
        //   participation_chat: options.init_chat_authority,
        //   room_num: room_num,
        //   user_num: user_num
        // });
      } else {
        res.status(200).send({ success: false });
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