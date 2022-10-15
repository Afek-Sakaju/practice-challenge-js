if (false) {
    class PoliceOfficer {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }

        get name() {
            return this._name;
        }

        get age() {
            return this._age;
        }

        set setName(name) {
            this._name = name;
        }

        set setAge(num) {
            this._age = num;
        }

        printName() {
            console.log(`my name is ${this._name}`);
        }
    }

    const officer1sarah = new PoliceOfficer('sarah', 20);
    const officer2david = new PoliceOfficer('david', 30);
    const officer3yaakov = new PoliceOfficer('yaakov', 40);

    officer1sarah.printName();

    const boundFunction = officer1sarah.printName.bind(officer2david);

    boundFunction();

    const arr1 = [1, 2, 3, 4];

    console.log(arr1);

    const arr2 = arr1.map((a) => {
        return a * 100;
    });

    console.log(arr2);
}

const stock = {
    name: 'apple',
    price: 55,
    symbole: 'apl',
};

const newStock = { ...stock};
console.log(JSON.stringify(newStock));
