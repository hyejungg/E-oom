module.exports = app => {
    const user = require("../controllers/user.controller.js");

    var router = require("express").Router();
    //signin
    router.post("/signin",user.signIn);
    //signup
    router.post("/signup",user.signUp);
    //check ID valid (중복확인)
    router.get("/checkid/:user_email",user.isValidID);
    //find ID
    router.post("/findid",user.findID);

    // //Check the email if it's alreadt exist
    // router.get("/getNum/:user_email",users.findNumByEmail);
    // //Create a new User
    // router.post("/create",users.create);

    // //Retrieve all Users
    // router.get("/",users.findAll);

    // //Retrieve a single user with user_email
    // router.get("/email/:user_email",users.findByEmail);

    // router.get("/num/:user_num",users.findByNum);

    // router.put("/edit/:user_num",users.updateAll);

    app.use('/api/users', router);
}