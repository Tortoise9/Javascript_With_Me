// this is anooymous function
// there are 2 types of functino 
// one is simple and this is anonymous function
const sum = function(a, b) {
    return (a+b);
}

//function is also the a value so we can 
// store that into variable  
let add  = sum(23,11);
console.log(add);

const divide = function (a , b){
    return (a/b);
}

const remainder = function (a,b){
    return a%b;
}
let ans1= divide(10,2);
let ans2 = remainder(7,5);
console.log(ans1,ans2);