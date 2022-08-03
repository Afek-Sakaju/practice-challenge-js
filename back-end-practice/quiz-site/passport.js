const passport = require('passport');
const LocalStrategy = require('passport-local');
const { users } = require('./models/users.model');

passport.use(
    new LocalStrategy((username, password, done) => {
        const user = Object.values(users).find(
            (user) => user.username === username
        );
        if (!user) done(null, false);
    })
);
