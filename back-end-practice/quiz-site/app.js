const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');

require('./passport-config');
const userRoute = require('./routes/user-route');
const authRoute = require('./routes/auth-route');
const mainRoute = require('./routes/main-route');

const app = express();

app.use(
    session({
        secret: 'hola amigos',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const publicPath = path.join(__dirname, '..', 'public');
app.use('/static', express.static(publicPath));

app.use('/', mainRoute);
app.use('/users', userRoute);
app.use('/auth', authRoute);

//error handling
app.use((err, req, res, next) => {
    if (req.originalUrl.startsWith('/users')) {
        res.status(403).send({ error: err.message });
    } else {
        res.status(503).send({ error: err.message });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`server is up, port:${port}`);
});
