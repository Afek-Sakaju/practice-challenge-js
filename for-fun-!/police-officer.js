class PoliceOfficer {
    constructor(name, age, crush, birthday) {
        this._name = name;
        this._age = age;
        this._favFood = 'dunkin-donuts';
        this._crush = crush ?? 'Anna the new crew manager';
        this._gunAllowed = age > 21 ? true : false;
        this._birthday = birthday;
        this._skill = age > 21 ? age - 21 : 0;
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

    get skill() {
        return this._skill;
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

    updateSkill() {
        this._skill = this.age > 21 ? this._age - 21 : 0;
    }

    allowGun() {
        if (this._age <= 21) return false;

        this._gunAllowed = true;
        return true;
    }

    fightAlien(aliensSkill, aliensCount) {
        if (this._gunAllowed === false) return "can't fight without a gun!";

        const fightLog = {
            skillDifference: 0,
            winner: '',
            time: new Date().toDateString(),
        };

        if (this._skill > aliensSkill) {
            fightLog.skillDifference = this._skill - aliensSkill * aliensCount;
            fightLog.winner = 'police-officer';
        } else if (this._skill < alienSkill) {
            fightLog.skillDifference = aliensSkill * aliensCount - this._skill;
            fightLog.winner = 'aliens';
        } else {
            fightLog.skillDifference = 0;
            fightLog.winner = 'its a tie, all of them lost consciousness';
        }

        return fightLog;
    }

    static whatsForBreakfast() {
        return 'sugar donuts !!';
    }
}

const bDay = new Date('2000', '09', '29');
const sarah = new PoliceOfficer('sarah', 31, 'nuriel', bDay);

console.log(sarah.skill);
sarah.updateSkill();
console.log(sarah.fightAlien(2, 3));
