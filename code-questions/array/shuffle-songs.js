/* Q: Write a function that accepts array with string, any
string represent song, your task is to return array of the songs 
in randome play order aka: "shuffle" */

function shuffle(songs) {
    const temp = songs.slice(0);
    const res = [];

    function generateRandom(min, max) {
        return ~~(Math.random() * (max + min) + min);
    }

    while (temp.length > 0) {
        const randomIndex = generateRandom(0, temp.length);

        res.push(temp.splice(randomIndex, 1)[0]);
    }

    return res;
}

/* The tests are in the function to check manually because 
the result should be randomise than its more comfortable 
to see that the results on the function down below : "testShuffle"*/

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

testShuffle();
