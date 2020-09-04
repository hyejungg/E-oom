const db = require("../models");
const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const Op = db.Sequelize.Op;
const Enrollment = db.enrollment;
const Lecture = db.lecture;
const User = db.user;

exports.createEnrollment = async(req, res) => {
    if(!req.body){
        res.status(400).send({
            message : "createLecture_400Error"
        });
    }
    try{
        const data = await Lecture.findAll({
            where : {
                lecture_num : req.body.lecture_num
            }
        })
        if(data[0].dataValues.user_num === req.user_num){
            res.send({"message" : "Host can't join the lecture"});
            return;
        }
        //console.log(data[0].dataValues.user_num);
        //console.log(data[0].dataValues.lecture_title);
        //console.log(req.user_num);
        const enrollment = {
            lecture_num : data[0].dataValues.lecture_num,
            lecture_title : data[0].dataValues.lecture_title,
            user_num : req.user_num
        };

        await Enrollment.create(enrollment)
        .then(data => {
            res.status(201).json(enrollment);
        })
        .catch(err => {
            res.send("Already exist");
        });
    }catch(err){
        res.send("Wrong lecture_num : "+ req.body.lecture_num);
    }
};

exports.readEnrollment = async (req, res) =>{
    if(req.query.type == 'title'){
        var condition = {where: {user_num : req.user_num, lecture_title: {[Op.like] : "%" + req.query.keyword + "%"}}};
    }else if(req.query.length == undefined){
        var condition = {where: {user_num : req.user_num}};
    }else{
        res.status(400).send({
            message: "'type' must be id or title, input keyword"
        });
    }

    try{
        var lecture_list = [];
        enrolled_list = await Enrollment.findAll(condition);
        for(var i=0; i<enrolled_list.length; i++){
            var hostdata = await User.findAll({
                attributes : ['user_nickname'],
                where : {
                    user_num : enrolled_list[i].dataValues.user_num
                }
            })
            var lecturedata = await Lecture.findAll({
                attriutes : ['lecture_id', 'lecture_capacity'],
                where : {
                    lecture_num : enrolled_list[i].dataValues.lecture_num
                }
            })
            //console.log(data[0].user_nickname);
            var enrolled_lecture = {
                lecture_num : enrolled_list[i].dataValues.lecture_num,
                lecture_title : enrolled_list[i].dataValues.lecture_title,
                lecture_id : lecturedata[0].lecture_id,
                lecture_capacity : lecturedata[0].lecture_capacity,
                user_nickname : hostdata[0].user_nickname
            }

            lecture_list.push(enrolled_lecture);
        }
        res.status(200).send(lecture_list);

    }catch(err){
        res.status(500).send({
            message : "500 create_Error"
        });
    }
}
