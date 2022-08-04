const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//same^: const { Strategy: LocalStrategy } = require('passport-local');
const { users } = require('./models/users-model');

passport.use(
    new LocalStrategy((username, password, done) => {
        const user = Object.values(users).find(
            (user) => user.username === username
        );
        if (!user) {
            console.log(`Auth: user '${username}' not found`);
            done(null, false);
        } else if (user.password !== password) {
            done(null, false);
            console.log(`Auth: user '${username}' has not match the password`);
        } else {
            done(null, user);
            console.log(`Auth: user '${username}' login successfuly`);
        }
    })
);

passport.serializeUser(function (user, done) {
    done(null, users[id]);
});

passport.deserializeUser(function (id, done) {
    done(null, users[id]);
});
