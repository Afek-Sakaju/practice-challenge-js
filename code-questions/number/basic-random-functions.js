/* Part-1: Write a function that roll 3 random numbers between 0-100 
and print them, then returns the biggest number */

function biggestFromThree() {
    const num1 = ~~(Math.random() * 100);
    const num2 = ~~(Math.random() * 100);
    const num3 = ~~(Math.random() * 100);

    console.log(`first:${num1}, second:${num2}, third:${num3}`);

    return Math.max(num1, num2, num3);
}

/* Part-2: Write a function that generates random number between 1000-9999 
then print its digit's sum */

function randomDigitsSum() {
    let random = Math.floor(Math.random() * (9999 - 1000) + 1000);
    console.log(`random number: ${random}`);

    let sum = 0;
    random = JSON.stringify(random);

    for (const char of random) {
        sum += +char;
    }
    console.log(`random number's digits sum: ${sum}`);
}
