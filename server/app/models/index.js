const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
//   dialectOptions: {
//     ssl: {
//         require: true
//     }
// }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
<<<<<<< HEAD
db.lecture = require("./lecture.model.js")(sequelize, Sequelize);
=======
db.room = require("./room.model.js")(sequelize, Sequelize);
db.participation = require("./participation.model.js")(sequelize,Sequelize);
db.user.belongsToMany(db.room,{through : db.participation,foreignKey : "room_num"});
db.room.belongsToMany(db.user,{through : db.participation,foreignKey:"user_num"});

>>>>>>> 39486b71cacc68cb3bbd828f9ea8911055f3d13e
module.exports = db;