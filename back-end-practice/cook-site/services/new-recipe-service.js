function existanceCheck(name, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].recipeName === name) return i;
    }
    return false;
}

module.exports = existanceCheck;
