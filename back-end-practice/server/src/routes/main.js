const express = require(express);
const logAPI = require('../middleware/logAPI');
const router = express.Router();

router.use(log);

router.get('/', (req, res, next) => {
    res.send('hello world');
});

router.get('/health', (req, res, next) => {
    res.send('OK');
});
