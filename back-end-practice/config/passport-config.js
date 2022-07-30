const LocalStrategy = require('passport-local').Strategy;

function initalize(passport, getUserByUsername) {
    const authenticateUser = (username, password, done) => {
        const user = getUserByUsername(username);
        if (user === null) {
            return done(null, false, { massage: 'username is not existing' });
        }

        if (password === user.password) return done(null, user);
        else return done(null, false, { massage: 'password incorrect' });
    };
    passport.use(new LocalStrategy({ username: 'username' }, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.username));
    passport.deserializeUser((username, done) => {
        done(null, getUserByUsername(username));
    });
}

module.exports = initalize;
