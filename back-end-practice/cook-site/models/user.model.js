const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        id: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'missing email'],
            unique: true,
            validate: {
                validator: function (email) {
                    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    return emailRegex.test(email.text);
                },
                message: 'Enter a valid email',
            },
        },
        password: {
            type: String,
            required: [true, 'missing password'],
        },
        phoneNumber: {
            type: String,
            default: 'empty',
        },
        fullName: { type: String, default: 'unknown' },
    },
    { timestamps: true }
);

module.exports.UserModel = mongoose.model('user', userSchema);
