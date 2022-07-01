/* Q1: "Write a function that accepts number N 
and prints a triangle of size N" */

function starsTriangle(num) {
    if (!num) return;

    starsTriangle(num - 1);
    console.log('*'.repeat(num));
}

starsTriangle(8);
