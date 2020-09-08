module.exports = (sequelize, Sequelize) => {
    const Attendance = sequelize.define("attendance", {
        attend_start: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        attend_end: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        room_num: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        user_num: {
            type: Sequelize.INTEGER,
            primaryKey: true
        }
    });

    return Attendance;
};
