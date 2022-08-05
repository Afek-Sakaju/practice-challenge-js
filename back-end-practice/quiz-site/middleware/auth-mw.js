function authenticateUser(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('http://google.com');
    }
}

module.exports = authenticateUser;
