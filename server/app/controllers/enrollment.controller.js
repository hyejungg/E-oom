const db = require("../models");
const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const { lecture } = require("../models");
const Enrollment = db.enrollment;

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
