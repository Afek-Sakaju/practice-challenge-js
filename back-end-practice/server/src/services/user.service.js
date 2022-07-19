const UserModel = require('../models/user.model');

const users = {};

module.exports.registerUser = async function (username, password) {
    const { username, password } = req.body;
    const user = new UserModel({ username, password });
    //todo: save to file
    await user.save();

    return user;
};
