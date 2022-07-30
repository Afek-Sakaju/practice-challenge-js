class UserModel {
    constructor({ username, password }) {
        this.username = username;
        this.password = password || 123;
        // ^ just for debugging until i learn how to get password from body
    }

    static getUserByUserName(username, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].username === username) return list[i];
        }
        return false;
    }
}

module.exports = UserModel;
