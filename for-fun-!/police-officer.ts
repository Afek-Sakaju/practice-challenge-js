class PoliceOfficer {
    private _name: string;
    private _age: number;
    private _favFood: string;
    private _birthday: Date;
    private _skill: number;

    constructor(name: string, age: number, birthday: Date) {
        this._name = name;
        this._age = age;
        this._favFood = 'dunkin-donuts';
        this._birthday = birthday;
        this._skill = age > 21 ? age - 21 : 0;
    }

    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    get favFood(): string {
        return this._favFood;
    }

    get birthday(): string {
        return this._birthday.toDateString();
    }

    get skill(): number {
        return this._skill;
    }

    set setName(name: string) {
        this._name = name;
    }

    set setAge(num: number) {
        this._age = num;
    }

    set setFavFood(food: string) {
        this._favFood = food;
    }

    set setBirthDay(newDate: Date) {
        this._birthday = newDate;
    }

    updateSkill() {
        this._skill = this.age > 21 ? this._age - 21 : 0;
    }

    skillShout() {
        console.log(
            `my name is ${this._name} \n and my skill level is ${this._skill}!!!`
        );
    }

    fightAliens(aliensSkill: number, aliensCount: number): Object | string {
        if (this._age <= 21) return 'too young to fight';

        const fightLog = {
            skillDifference: 0,
            winner: '',
            time: new Date().toDateString(),
        };

        if (this._skill > aliensSkill) {
            fightLog.skillDifference = this._skill - aliensSkill * aliensCount;
            fightLog.winner = this._name;
        } else if (this._skill < aliensSkill) {
            fightLog.skillDifference = aliensSkill * aliensCount - this._skill;
            fightLog.winner = 'aliens';
        } else {
            fightLog.skillDifference = 0;
            fightLog.winner = 'its a tie';
        }

        return fightLog;
    }

    static whatsForBreakfast() {
        return 'sugar donuts !!';
    }
}

const bDay = new Date(2000, 09, 29);
const sarah = new PoliceOfficer('sarah', 31, bDay);

sarah.skillShout();
const newSkillShout = sarah.skillShout.bind({ _skill: 15, _name: 'hanna' });
newSkillShout();
