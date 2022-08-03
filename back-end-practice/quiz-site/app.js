const express = require('express');
const mainRoute = require('./routes/main-route');
const port = 3001;
const app = express();

app.use('/', mainRoute);

app.listen(port, () => {
    console.log(`server is up, port:${port}`);
});
