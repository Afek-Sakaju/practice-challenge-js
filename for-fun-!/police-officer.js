class PoliceOfficer {
    constructor(name, age, crush, birthday) {
        this._name = name;
        this._age = age;
        this._favFood = 'dunkin-donuts';
        this._crush = crush ?? 'Anna the new crew manager';
        this._gunAllowed = age > 21 ? true : false;
        this._birthday = birthday;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get favFood() {
        return this._favFood;
    }

    get crush() {
        return this._crush;
    }

    get gunAllowed() {
        return this._gunAllowed;
    }

    get birthday() {
        return this._birthday.toDateString();
    }

    set setName(name) {
        this._name = name;
    }

    set setAge(num) {
        this._age = num;
    }

    set setFavFood(food) {
        this._favFood = food;
    }

    set setCrush(crushName) {
        this._crush = crushName;
    }

    set setBirthDay(newDate) {
        this._birthday = newDate;
    }

    allowGun() {
        if (this._age <= 21) return false;

        this._gunAllowed = bool;
        return true;
    }

    static whatsForBreakfast() {
        return 'sugar donuts !!';
    }

    static whatsForLaunch() {
        return 'choclate donuts !!';
    }

    static whatsForDinner() {
        return 'maple donuts !!!';
    }
}

const day = new Date('2000', '09', '29');
const sarah = new PoliceOfficer('sarah', 21, 'nuriel', day);
console.log(sarah.age);
console.log(sarah.birthday);
