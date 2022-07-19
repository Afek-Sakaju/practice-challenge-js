const { generateId } = require('../utils');

class UserModel {
    constructor({ userId, username, password, lastLoginAt }) {
        this.userId = userId ?? generateId;
        this.username = username;
        this.password = password;
        this.lastLoginAt = lastLoginAt;
    }
    async save() {
        //todo : save to file
    }

    static getUserById(userId) {
        //todo: get user from file
    }
}

module.exports = UserModel;
