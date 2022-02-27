function makeAdder(x){
    function z(y){ return x + y; }
    return z;
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log("good night");
console.log(add5(2));
console.log(add10(21));
