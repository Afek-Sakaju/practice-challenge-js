function starsTriangle(num) {
    if (!num) return;

    starsTriangle(num - 1);
    console.log('*'.repeat(num));
}

starsTriangle(8);
