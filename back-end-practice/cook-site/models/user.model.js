const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
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

userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const salt = bcrypt.genSaltSync(10); // 10 = saltRounds
        const plaintextPassword = this.password;
        const hashed = bcrypt.hashSync(plaintextPassword, salt);

        this.password = hashed;
    }
    done();
});

module.exports.UserModel = mongoose.model('user', userSchema);
