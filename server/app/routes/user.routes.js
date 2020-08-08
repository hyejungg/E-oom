module.exports = app => {
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();

    //Create a new User
    router.post("/signup",users.create);

    //Retrieve all Users
    router.get("/",users.findAll);

    //Retrieve a single user PW wih user_email
    router.get("/signin/:user_email",users.findPW);

    app.use('/api/users', router);
}