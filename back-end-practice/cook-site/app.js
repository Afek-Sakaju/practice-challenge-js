const express = require('express');
const path = require('path');
const passport = require('passport');
const mainRoute = require('./routes/main-route');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const users = [];

app.use(
    session({
        secret: 'shalom!',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

const initalizePassport = require('../config/passport-config');
initalizePassport(passport, (username) => {
    users.find((user) => user.username === username);
});

app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const publicPath = path.join(__dirname, '.', 'public');
app.use('/static', express.static(publicPath));

app.use('/', mainRoute);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

module.exports = users;
