/*consider that n will always be positive and odd number
if function gets ('@',5) the output will be:
@@@@@
@@@
@
@@@
@@@@@
*/

function printSymbole(symbole, n) {
    if (n < 0) return;
    if (n > 1) console.log(symbole.repeat(n));

    printSymbole(symbole, n - 2);

    console.log(symbole.repeat(n));
}

printSymbole('@', 5);
