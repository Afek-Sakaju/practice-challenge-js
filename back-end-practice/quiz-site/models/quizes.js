class Quiz {
    constructor(name, envirnoment, food) {
        this._name = name;
        this._envirnoment = envirnoment;
        this._food = food;
    }

    get name() {
        return this._name;
    }

    get envirnoment() {
        return this._envirnoment;
    }

    get food() {
        return this._food;
    }

    set name(n) {
        this._name === n;
    }

    set envirnoment(e) {
        this._envirnoment === e;
    }

    set food(f) {
        this._food === f;
    }

    topicSelect() {
        const num = Math.floor(Math.random() * 2);
        //generates number from 0 - 1 (2 topics provided)

        let question;
        let answer;

        switch (num) {
            case 0:
                question = `what's the living envirnoment of the ${this.name}?`;
                answer = this.envirnoment;
                break;
            case 1:
                question = `what's the favorite food of the ${this.name}?`;
                answer = this.food;
                break;
        }
        return [question, answer];
    }

    static generateQuestion() {
        const num = Math.floor(Math.random() * 4);
        //generates number from 0 - 3 (4 animals provided)
        let arr;

        switch (num) {
            case 0:
                arr = lion.topicSelect();
                break;
            case 1:
                arr = monkey.topicSelect();
                break;
            case 2:
                arr = squirrel.topicSelect();
                break;
            case 3:
                arr = wolf.topicSelect();
                break;
        }

        return arr;
    }
}

const lion = new Quiz('lion', 'desert', 'meat');
const monkey = new Quiz('monkey', 'jungle', 'fruits');
const squirrel = new Quiz('squirrel', 'forest', 'nuts');
const wolf = new Quiz('wolf', 'mountains', 'meat');

module.exports = Quiz;
