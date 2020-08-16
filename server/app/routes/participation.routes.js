module.exports = app => {
    const user = require("../controllers/participation.controller.js");

    var router = require("express").Router();
    //create participation
    //delete participation
    //get participation
    //get isHost
    //update sharing
    //update annotation
    //update chat
    //update audio
    //update video


    app.use('/api/participations', router);
}