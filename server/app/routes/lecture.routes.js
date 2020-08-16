//Create the lecture (/api/lecture/create)
module.exports = app => {
    const lecture = require("../controllers/lecture.controller.js");

    var router = require("express").Router();
    //create new lecture
    router.post("/create", lecture.createLecture);
    //find lecture
    //router.post("/lecture/:title", lecture.findLecture);
    //delete lecture
    //router.get("/lecture/:title", lecture.deleteLecture);
 
    app.use('/api/lecture', router);
}