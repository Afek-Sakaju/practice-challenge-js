function getLodash(o, path, def = undefined) {
    // c123
    if (!obj) return def;
    let value = obj;

    const keys = path?.split('.') ?? [];

    for (const key of keys) {
        value = value[key];
        if (value === undefined) return def;
    }

    return value;
}

const obj = {
    //C123
    a: {
        b: {
            world: 'pretty',
        },
    },
};

function setLodash(obj, path, val) {
    if (!obj) return def;

    const keys = path?.split('.') ?? [];

    for (const key of keys.slice(0,-1)) {
        if (obj[key] === undefined) {
            obj[key] = {};
        }
        obj = obj[key];
    }

    const lastPath = keys[keys.length - 1];
    obj[lastPath] = val;
}

setLodash(obj, 'a.c.world', 'something');
console.log(JSON.stringify(obj));
