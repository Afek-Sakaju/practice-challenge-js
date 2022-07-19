const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mainRouter = require('./routes/main');
//const cors = require('cors');

const app = express();

// app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: flase }));
app.use(
    session({
        secret: 'hola',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: flase },
    })
);

app.use('/', mainRouter);

app.listen(3000, () => {
    console.log('app listen to http://localhost:3000');
});
