const passport = require('passport');
const { Strategy : LocalStrategy } = require('passport-local');
const { UserModel } = require('../models/user.model');

passport.use(new LocalStrategy((username, password, done) => {
    const user = UserModel.getUserByUserName(username);

    if(!user) {
        console.log(`Auth: user '${username}' not found`);
        done(null, false);
    }
    else if(user.password !== password) {
        console.log(`Auth: user '${username}' has not match the password`);
        done(null, false);
    }
    else {
        console.log(`Auth: user '${username}' login successfully`);
        done(null, user);
    }
}))

passport.serializeUser(function(user, done) {
    done(null, user.userId);
});

passport.deserializeUser(function(userId, done) {
    done(null, UserModel.getUserById(userId));
});
