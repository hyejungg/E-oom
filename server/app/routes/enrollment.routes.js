const { authJwt } = require("../middleware/index.js");

module.exports = app => {
    const enrollment = require("../controllers/enrollment.controller.js");

    var router = require("express").Router();
    //create new lecture
    router.post("/", [authJwt.verifyTken], enrollment.createEnrollment);

    //find Lectures
    router.get("/", [authJwt.verifyTken], enrollment.readEnrollment);

    //delete Lecture with lecture_num
    router.delete("/:lecture_num", [authJwt.verifyTken], enrollment.deleteEnrollment);
    
    app.use('/api/enrollment', router);
}     