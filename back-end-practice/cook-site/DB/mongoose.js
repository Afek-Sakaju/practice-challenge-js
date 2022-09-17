const mongoose = require('mongoose');

module.exports.connectDB = async function (url) {
    await mongoose
        .connect(url)
        .then(() => {
            console.log('connected to database');
        })
        .catch((err) => {
            console.log(`failed to connect, error:${err}`);
            throw err;
        });
};
