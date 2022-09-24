const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { UserModel } = require('../models/user.model');
const bcrypt = require('bcrypt');

passport.use(
    new LocalStrategy(async (givenUsername, password, done) => {
        const user = await UserModel.findOne({ username: givenUsername });

        if (!user) return done('user not found', null);

        const matchedPassword = await bcrypt.compare(password, user.password);

        if (!matchedPassword) {
            return done('user not match password', null);
        }

        done(null, user);
    })
);

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    const user = UserModel.findById(id);
    if (!user) done('user not found', null);
    else done(null, user);
});
