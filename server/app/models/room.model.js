const moment = require('moment');
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
      room_link: {
        type: Sequelize.STRING,
        allowNull: false
      },
      room_activate: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue : false
      },
      room_start: {
        type: Sequelize.DATE,
        allowNull: false,
        get() {
          return moment(this.getDataValue('room_start')).format('YYYY-MM-DD HH:mm:ss');
        }
      },
      room_end: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue : null
      },
      room_recursion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      room_reminder: {
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
        allowNull: false,
        defaultValue : false
      }
    });
  
    return Room;
  };
  