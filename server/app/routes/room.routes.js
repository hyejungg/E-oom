const { authJwt } = require("../middleware/index.js");

module.exports = app => {
    const room = require("../controllers/room.controller.js");

    var router = require("express").Router();
    //create room
    router.post("",[authJwt.verifyToken],room.createRoom);
    router.get("/:lecture_num",[authJwt.verifyToken],room.getRooms);
    router.post("/join",[authJwt.verifyToken],room.joinRoom);
    router.post("/leave",[authJwt.verifyToken],room.leaveRoom);
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
