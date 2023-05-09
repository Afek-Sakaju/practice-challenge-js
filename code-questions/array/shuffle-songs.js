/* Write a function that accepts array with any string that represents song.
Your task is to return array of the songs in random play order (shuffle) */

function shuffle(songs) {
    const temp = songs.slice(0);
    const shuffledSongs = [];

    function generateRandom(min, max) {
        return ~~(Math.random() * (max + min) + min);
    }

    while (temp.length > 0) {
        const randomIndex = generateRandom(0, temp.length);
        const [randomSong] = temp.splice(randomIndex, 1);

        shuffledSongs.push(randomSong);
    }

    return shuffledSongs;
}

/* The tests are in the function to check manually because the result 
should be just randomized and not specific predictable value.
You can run the test function "testShuffle" below*/

function testShuffle() {
    const songs = [
        'what-is-love',
        'love-in-the-air',
        'diamonds',
        'monster',
        'venom',
    ];

    /* The test will give output of 3 results of the function 
    to prevent unwanted coincidence of randomizing in the initial order*/
    for (let i = 0; i < 3; i++) {
        console.log(shuffle(songs));
    }
}

testShuffle();
