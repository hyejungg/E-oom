//Create the Lecture
module.exports = (sequelize, Sequelize) => {
  const Lecture = sequelize.define("lecture", {
    lecture_num: {
      type: Sequelize.INTEGER,
      autoIncrement : true,
      allowNull: false,
      primaryKey : true
    },
    lecture_title: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    host_num: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    lecture_available: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    lecture_capacity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    lecture_full: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    init_private: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    init_mute_authority: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },    
    init_chat_authority: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    init_save_authority: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    init_notification: {
      type: Sequelize.BOOLEAN,      
      allowNull: false
    }
  });

  return Lecture;
};


// module.exports = User;