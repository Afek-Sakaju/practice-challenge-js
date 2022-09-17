const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const { connectDB } = require('./DB/mongoose');

const url = 'mongodb://127.0.0.1:27017/cook-site';
const mainRouter = require('./routers/main.router');
const authRouter = require('./routers/auth.router');
const recipesRouter = require('./routers/recipes.router');
require('./config/passport-config');

connectDB(url);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '.', 'public')));

app.use(
    session({
        secret: 'shalom!',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', mainRouter);
app.use('/auth', authRouter);
app.use('/recipe', recipesRouter);

app.use((err, req, res, next) => {
    console.error(`${req.method}:${req.originalUrl}, failed with error:${err}`);
    next(err);
});

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
