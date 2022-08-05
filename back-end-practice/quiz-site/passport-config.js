const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
//same^: const LocalStrategy = require('passport-local').Strategy
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
            console.log(`Auth: user '${username}' has not match the password`);
            done(null, false);
        } else {
            console.log(`Auth: user '${username}' login successfuly`);
            done(null, user);
        }
    })
);

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    done(null, users[id]);
});
