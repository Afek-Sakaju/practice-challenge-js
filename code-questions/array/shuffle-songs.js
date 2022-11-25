/* Q: Write a function that accepts array with string, any
string represent song, your task is to return array of the songs 
in randome play order aka: "shuffle" */

function shuffle(songs) {
    const temp = songs.slice(0);
    const res = [];

    while (temp.length > 0) {
        const randomIndex = generateRandom(0, temp.length);

        res.push(temp.splice(randomIndex, 1)[0]);
    }

    return res;
}

function generateRandom(min, max) {
    return ~~(Math.random() * (max + min) + min);
}

function testShuffle() {
    const songs = [
        'what-is-love',
        'love-in-the-air',
        'diamonds',
        'monster',
        'venom',
    ];

    for (let i = 0; i < 5; i++) {
        const result = shuffle(songs);

        console.log(result);
    }
}

//testShuffle();

const bday = new Date('02/02/2000')
console.log(bday instanceof Date)