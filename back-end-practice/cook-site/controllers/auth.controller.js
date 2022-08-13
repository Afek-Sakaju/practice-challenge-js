const passport = require('passport');

module.exports.loginRedirectCtrl = passport.authenticate('local', {
    successRedirect: '/auth/success',
    failureRedirect: '/e404.html',
});

module.exports.successLoginCtrl = function (req, res, next) {
    res.send('you are logged in successfuly');
};
