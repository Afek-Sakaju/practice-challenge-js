const express = require('express');
const app = express();
const afek = require('./routes/afek');
const port = 3001;
const cors = require('cors');

app.use('/afek', afek);
//use the afek.js file to handle
//endpoints that start with /afek

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
