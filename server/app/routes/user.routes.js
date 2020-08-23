const { authJwt } = require("../middleware/index.js");

module.exports = app => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();
    //public
    //get Users
    router.get("/",user.getAll);
    //find ID
    router.post("/findid",user.findID);
    //find PW (랜덤 비번 생성)
    router.post("/findpw",user.findPW);
    //check ID,Phone
    router.post("/check",user.checkInfo);
    //set new PW
    router.put("/newpw",user.newPW);
    
    
    //private
    //check PW
    router.post("/checkpw",[authJwt.verifyToken],user.checkPW);
    //get User Info
    router.get("/userinfo",[authJwt.verifyToken],user.getOne);
    //update User
    router.put("/update",[authJwt.verifyToken],user.updateUser);
    //update PW
    router.put("/updatepw",[authJwt.verifyToken],user.updatePW);

    

    app.use('/api/users', router);
}