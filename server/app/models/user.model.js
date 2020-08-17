module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    user_num: {
      type: Sequelize.INTEGER,
      autoIncrement : true,
      allowNull: false,
      primaryKey : true
    },
    user_nickname : {
      type:Sequelize.STRING,
      allowNull : false
    },
    user_fname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    user_lname: {
      type: Sequelize.STRING,
      allowNull: true
    },
    user_email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    user_pw: {
      type: Sequelize.STRING,
      allowNull: false
    },
    user_birthdate: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    user_phone: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });

  return User;
};
