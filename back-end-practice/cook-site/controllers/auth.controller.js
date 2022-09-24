const passport = require('passport');

module.exports.loginRedirectCtrl = passport.authenticate('local', {
    successRedirect: '/auth/success',
    failureRedirect: '/e404.html',
});

module.exports.homePageCtrl = function (req, res, next) {
    res.redirect('home.jpg');
};
