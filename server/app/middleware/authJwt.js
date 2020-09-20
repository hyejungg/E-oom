const jwt = require("jsonwebtoken");
require("dotenv").config();

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.user_num = decoded.id;
    console.log(req.user_num);
    next();
  });
};

const authJwt = {
  verifyToken: verifyToken
};
module.exports = authJwt;