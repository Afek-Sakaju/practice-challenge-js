const { registerUser } = require('../services/user.service');

module.exports.registerUserCtrl = function (req, res, next) {
    const { username, password } = req.body;
    const user = await registerUser({username, password});
    res.json(user);
};
