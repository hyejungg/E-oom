const { authJwt } = require("../middleware/index.js");

module.exports = app => {
    const lecture = require("../controllers/lecture.controller.js");
    var router = require("express").Router();
    //create new lecture
    router.post("/", [authJwt.verifyToken], lecture.createLecture);
    //find Lectures
    router.get("/", [authJwt.verifyToken], lecture.readLectures);
    //delete Lecture with lecture_num & host_num
    router.delete("/:lecture_num", [authJwt.verifyToken], lecture.deleteLecture);
    //delete all the Lectures with host_num
    //router.delete("/", [authJwt.verifyToken], lecture.deleteAllLecture);
    //update Lecture with lecture_num
    router.put("/:lecture_num", [authJwt.verifyToken], lecture.updateLectureInfo);
 
    app.use('/api/lecture', router);
}