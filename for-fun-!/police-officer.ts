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

    updateAge() {
        this._age = new Date().getFullYear() - bDay.getFullYear();
    }

    skillShout() {
        console.log(
            `my name is ${this._name} \n and my skill level is ${this._skill}!!!`
        );
    }

    fightAliens(alienSkill: number): Object | string {
        if (this._age <= 21) return 'too young to fight';

        const fightLog = {
            skillDifference: 0,
            winner: '',
            time: new Date().toDateString(),
        };

        switch (true) {
            case this._skill > alienSkill:
                fightLog.skillDifference = this._skill - alienSkill;
                fightLog.winner = this._name;
                break;
            case this._skill < alienSkill:
                fightLog.skillDifference = alienSkill - this._skill;
                fightLog.winner = 'aliens';
                break;
            default:
                fightLog.skillDifference = 0;
                fightLog.winner = 'its a tie';
        }

        return fightLog;
    }
}

const bDay = new Date(2000, 9, 29);
const sarah = new PoliceOfficer('sarah', 31, bDay);

sarah.skillShout();
const dani = sarah.skillShout.bind({ _skill: 20, _name: 'arir' });
const newSkillShout = sarah.skillShout.bind({ _skill: 30, _name: 'hanna' });
newSkillShout();
dani();
