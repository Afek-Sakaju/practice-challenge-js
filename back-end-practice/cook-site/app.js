const express = require('express');
const app = express();
const mainRoute = require('./routes/main-route');
const port = 3000;

app.use('/', mainRoute);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});