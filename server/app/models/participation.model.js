module.exports = (sequelize, Sequelize) => {
    const Participation = sequelize.define("participation", {
      participation_ishost: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      participation_sharing: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue : false
      },
      participation_annotation: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue : false
      },
      participation_chat: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      participation_audio: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue : false
      },
      participation_video: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue : false
      }
    });
  
    return Participation;
  };
  