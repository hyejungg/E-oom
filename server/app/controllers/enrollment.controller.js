const db = require("../models");
const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const Enrollment = db.enrollment;
const Lecture = db.lectures;
const User = db.users;

exports.createEnrollment = async(req, res) => {
    if(!req.body){
        res.status(400).send({
            message : "createLecture_400Error"
        });
    }

    const enrollment = {
        lecture_num : req.body.lecture_num,
        lecture_title : req.body.lecture_title,
        user_num : req.user_num
    };

    await Enrollment.create(enrollment)
    .then(data => {
        res.status(201).json(enrollment);
    })
    .catch(err => {
        res.status(500).send({
            message : "500 create_Error"
        });
    });
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
        enrolled_list = await Enrollment.findAll(condition);
    }
}
