function makeAdder(x){
    function z(y){ return x + y; }
    return z;
}
var add88 = makeAdder(88);
var add5 = makeAdder(5);
function hello(){
    console.log('hello');
}
var add10 = makeAdder(10);
console.log("good night");
console.log(add5(2));
console.log(add10(21));
