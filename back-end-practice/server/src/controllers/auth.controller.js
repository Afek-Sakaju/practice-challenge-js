const { registerUser } = require('../services/user.service');

module.exports.registerUserCtrl = function (req, res, next) {
    const { username, password } = req.body;
    const user = await registerUser({username, password});
    res.json(user);
};

module.exports.logoutUserCtrl = function (req, res, next) {
    const userId = req.user.userId; // req.user.userId;
    const user = await logoutUserCtrl(userId);
    // todo: logout from passport session
    res.sendStatus(200);
};