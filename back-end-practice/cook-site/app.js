const express = require('express');
const app = express();
const passport = require('passport');
const mainRoute = require('./routes/main-route');
const port = 3000;
const users = [];

const initalizePassport = require('../config/passport-config');
initalizePassport(passport, (username) => {
    users.find((user) => user.username === username);
});

app.use(express.urlencoded({ extended: flase }));
app.use(
    session({
        secret: 'hola-amigos',
        resave: false,
        saveUninitalized: flase,
    })
);
app.use(passport.initialize());
app.use(passport.session);

app.use('/', mainRoute);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

module.exports = users;
