const express = require('express');
const { users } = require('../models/users-model');
const router = express.Router();
const { authenticateUser } = require('../middleware/auth-mw');

router.use((req, res, next) => {
    console.log(req.method, req.originalUrl);
    next();
});

router.get('/all-users', authenticateUser, (req, res, next) => {
    res.json(users);
});

router.get('/:userId', (req, res, next) => {
    const { userId } = req.params;
    res.json(users[userId]);
});

router.post('/', (req, res, next) => {
    const { username, password } = req.body;
    const id = ~~(Math.random() * 100);
    users[id] = { id, username, password };
    res.sendStatus(201);
});

module.exports = router;
