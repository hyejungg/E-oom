module.exports = (sequelize, Sequelize) => {
    const Schedule = sequelize.define("schedule", {
      schedule_num: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey : true
      },
      room_title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      schedule_start: {
        type: Sequelize.DATE,
        allowNull: false
      },
      schedule_end: {
        type: Sequelize.DATE,
        allowNull: false
      },
      schedule_recursion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      schedule_reminder: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      schedule_activate: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue : true
      }
    });
    return Schedule;
};