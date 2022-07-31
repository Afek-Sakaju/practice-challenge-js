const express = require('express');
const app = express();
const mainRoute = require('./routes/main-route');
const port = 3001;

app.use('/', mainRoute);

app.listen(port, () => {
    console.log(`server is up, port:${port}`);
});
