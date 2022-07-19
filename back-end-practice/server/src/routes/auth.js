const router = express.Router();
const {registerUserCtrl} = require('../controllers/auth.controller')

router.use(logAPI);

router.post('/login', (req, res, next) => {
    res.send('OK');
});

router.post('/register', registerUserCtrl);

router.post('/logout', (req, res, next) => {
    res.send('OK');
});
