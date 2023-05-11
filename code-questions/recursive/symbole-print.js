/* Q: write a function that accept n (positive and odd number)
and symbol, then print the symbol in symmetric way by using recoursion
example: for input ('@',5) the function will print:
@@@@@
@@@
@
@@@
@@@@@ 
*/

function printSymbol(symbol, n) {
    if (n < 0) return;
    if (n > 1) console.log(symbol.repeat(n));

    printSymbol(symbol, n - 2);

    console.log(symbol.repeat(n));
}

printSymbol('$', 7);
