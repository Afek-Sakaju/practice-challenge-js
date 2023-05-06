const obj1 = { name: 'afek', age: 0 };

const obj2 = JSON.parse(JSON.stringify(obj1));

console.log(obj2.name);

obj1.name = 'david';

console.log(obj2.name);
