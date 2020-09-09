const db = require("../models");
const Participation = db.participation;


isJoining = async (req, res, next) => {
    const user_num = req.user_num;
    const exist = await Participation.count({
        where: { user_num: user_num }
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving users."
        });
    });
    if (exist > 0) {
        res.status(200).send({
            success: false,
            message: "you are already joining the room"
        });
        return;
    }
    next();
};

const checkStatus = {
    isJoining: isJoining
};
module.exports = checkStatus;