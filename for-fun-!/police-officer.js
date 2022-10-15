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
}

class Stack {
    items = [];
    push = (element) => this.items.push(element);
    pop = () => this.items.pop();
    isEmpty = () => this.items.length === 0;
    empty = () => (this.items.length = 0);
    size = () => this.items.length;
}

class Queue {
    items = [];
    enqueue = (element) => this.items.unshift(element);
    dequeue = () => this.items.pop();
    isEmpty = () => this.items.length === 0;
    empty = () => (this.items.length = 0);
    size = () => this.items.length;
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Item {
    //linkedList
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
