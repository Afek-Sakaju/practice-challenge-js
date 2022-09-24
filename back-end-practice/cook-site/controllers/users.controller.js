const { registerUser, updateUserData } = require('../services/users.services');

module.exports.registerUserCtrl = async (req, res, next) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        fullName: req.body.fullName,
    };
    const result = await registerUser(user);

    res.json(result);
};

module.exports.updateUserDataCtrl = async (req, res, next) => {
    const userData = {
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        fullName: req.body.fullName,
    };

    const result = await updateUserData(userData);
    res.status(200).json(result);
};
