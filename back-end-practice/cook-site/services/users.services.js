const { UserModel } = require('../models/user.model');
const bcrypt = require('bcrypt');

module.exports.registerUser = async (user) => {
    const userDoc = new UserModel(user);

    const result = await userDoc.save();

    return result.toJSON();
};

module.exports.updateUserData = async (data) => {
    const result = await UserModel.findOneAndUpdate(
        { _id: data._id },
        {
            password: data.password
                ? bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))
                : password,
        },
        { fullName: data.fullName ? data.fullName : fullName },
        { phoneNumber: data.phoneNumber ? data.phoneNumber : phoneNumber },
        {
            returnOriginal: false,
        }
        //fix me
    );

    return result;
};
