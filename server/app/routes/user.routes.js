const { authJwt } = require("../middleware/index.js");

module.exports = app => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();
    //public
    //get Users
    router.get("",user.getAll);
    //find ID
    router.post("/find-email",user.findID);
    //check ID,Phone
    router.post("/check-user",user.checkInfo);
    //set new PW
    router.patch("/new-password",user.newPW);
    
    
    //private
    //check PW
    router.post("/check-password",[authJwt.verifyToken],user.checkPW);
    //get User Info
    router.get("/user-info",[authJwt.verifyToken],user.getOne);
    //update User
    router.put("/update",[authJwt.verifyToken],user.updateUser);
    //update PW
    router.patch("/update",[authJwt.verifyToken],user.updatePW);

    

    app.use('/api/users', router);
}