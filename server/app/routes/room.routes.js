module.exports = app => {
    const user = require("../controllers/room.controller.js");

    var router = require("express").Router();
    //create room
    // router.post("/create");
    //delete room
    //update room Info
    //update room Option
    //update room status
    //get room status
    //get room Info
    //get room Option


    app.use('/api/rooms', router);
}