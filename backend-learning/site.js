const express = require('express');
const app = express();
const path = require('path');
//const router = express.Router();

const publicPath = path.join('/', 'public');
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
});
