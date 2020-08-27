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
   dialectOptions: {
     ssl: {
         require: true
     }
 }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.lecture = require("./lecture.model.js")(sequelize, Sequelize);
//db.enrollment = require("./enrollment.model.js")(sequelize, Sequelize);
db.room = require("./room.model.js")(sequelize, Sequelize);
//db.participation = require("./participation.model.js")(sequelize,Sequelize);
db.schedule = require("./schedule.model.js")(sequelize,Sequelize);

// db.user.belongsToMany(db.room,{through : db.participation,foreignKey : "room_num"});
// db.room.belongsToMany(db.user,{through : db.participation,foreignKey:"user_num"});


db.lecture.hasMany(db.room,{foreignKey : "host_num"});
db.room.belongsTo(db.lecture,{foreignKey : "host_num"});

db.lecture.hasMany(db.schedule,{foreignKey : "lecture_num"});
db.lecture.hasMany(db.schedule,{foreignKey : "host_num"});
db.schedule.belongsTo(db.lecture,{foreignKey : "lecture_num"});

db.room.hasMany(db.schedule,{foreignKey : "room_num"});
db.schedule.belongsTo(db.room,{foreignKey : "room_num"});

module.exports = db;