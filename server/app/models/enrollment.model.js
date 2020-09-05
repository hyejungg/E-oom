const { DataTypes, STRING } = require("sequelize");

//Create the Lecture
module.exports = (sequelize, Sequelize) => {
  const Enrollment = sequelize.define("enrollment", {
    lecture_num: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey : true
    },  
    lecture_title: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    user_num: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey : true
    }
  });

  return Enrollment;
};
