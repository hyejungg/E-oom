const { authJwt } = require("../middleware/index.js");

module.exports = app => {
    const enrollment = require("../controllers/enrollment.controller.js");

    var router = require("express").Router();
    //create new lecture
    router.post("/", [authJwt.verifyToken], enrollment.createEnrollment);

    //find Lectures
    router.get("/", [authJwt.verifyToken], enrollment.readEnrollment);

    //delete Lecture with lecture_num
    //router.delete("/:lecture_num", [authJwt.verifyToken], enrollment.deleteEnrollment);
    
    app.use('/api/enrollment', router);
}     