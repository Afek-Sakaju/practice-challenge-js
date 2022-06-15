const TYPES = {
    PAWN: 1,
    ROOK: 2,
    QUEEN: 3,
    KING: 4,
    KNIGHT: 5,
    BISHOP: 6
};

const SCORES = {
    [TYPES.PAWN]: 1,
    [TYPES.BISHOP]: 3,
    [TYPES.ROOK]: 3,
    [TYPES.KNIGHT]: 5,
    [TYPES.QUEEN]: 9,
    [TYPES.KING]: 0,
}

class Player {
    constructor(
        {
            position = { x: 0, y: 0},
            color = 'white',
            image = 'soldier.svg',
            type = TYPES.PAWN
        } = {}
    ) {
        if(this.constructor.name === 'Player') {
            throw 'PLAYER IS ABSTRACT CLASS!';
        }
        this._x = position.x;
        this._y = position.y;
        this.color = color;
        this.type = type;
        this.image = image;
        this.countX = 0;
        this._score = SCORES[this.type];
    }

    static getPlayerScore(p){
        return p.score;
    }

    get score(){
        return this._score;
    }

    get position(){
        return {x: this.x, y: this.y};
    }

    get x(){
        return this._x;
    }
    get y(){
        return this._y;
    }

    printPosition(){
        this.y++;
        console.log(this._x, this._y);
    }

    // abstract method
    move({x, y}) {
        throw 'MUST IMPLEMENTATION MOVE FUNCTION!!!!';
    }

    toString(){
        return `Player type: ${this.type} (${this.score}) at position ${JSON.stringify(this.position)}`
    }
}

class PAWN extends Player{
    constructor() {
        super();
    }

    move({x, y}) {
        console.log('PAWN MOVE')
    }
}

class BISHOP extends Player{
    constructor() {
        super({});
    }
    move({x, y}) {
        console.log('BISHOP MOVE')
    }
}

class Baby extends BISHOP{
    constructor() {
        super({});
    }
    move({x, y}) {
        console.log('Baby MOVE')
    }
}

// const pawn = new PAWN();
// const baby = new Baby();

// console.log('is pawn instance of PAWN', pawn instanceof PAWN);
// console.log('is bishop instance of BISHOP', bishop instanceof BISHOP);
// console.log('is bishop instance of Pawn', bishop instanceof PAWN);
// console.log('is pawn instance of Player', pawn instanceof Player);

// s.printPosition();
// s.move({x: s.x, y: s.y+1});
// s.printPosition();
// s.y = 3
// s.printPosition();
// console.log('SCORE', Player.getPlayerScore(s))
// s.move({x: s.x, y: s.y+1});



class Board {
    constructor() {
        this._playerList = [
            { type: 'PAWN' },
            { type: 'ROOK' },
            { type: 'BISHOP' },
            { type: 'PAWN' },
        ];
    }

    get playerList(){
        return this._playerList;
    }

    *[Symbol.iterator](){
        for(const player of this.playerList){
            yield player;
        }
    }

    [Symbol.iterator](){
        let i = 0;
        return {
            next: () => ({
              value: this.playerList[i++],
              done: i > this.playerList.length,
            })
        }
    }
}
const board = new Board();
for(const player of board.playerList){
    console.log(player);
}










