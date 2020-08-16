module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("room", {
      room_num: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey : true
      },
      room_title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      room_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      room_pw: {
        type: Sequelize.STRING,
        allowNull: false
      },
      room_link: {
        type: Sequelize.STRING,
        allowNull: false
      },
      room_activate: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      option_private: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      option_mute_authority: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      option_chat_authority: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      option_save_authority: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      option_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      option_lock: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  
    return Room;
  };
  