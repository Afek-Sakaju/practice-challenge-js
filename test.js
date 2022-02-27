function makeAdder(x){
    function z(y){ return x + y; }
    return z;
}
var add88 = makeAdder(88);
var add5 = makeAdder(5);

console.log("good night");
console.log(add5(2));
