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
        _id: req.body._id,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        fullName: req.body.fullName,
    };
    //fix me
    const result = await updateUserData(userData);

    res.json(result);
};
