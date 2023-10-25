//let type cast
const birthYear = '2057';
const currentYear = '2080';
console.log(typeof(birthYear))
console.log(birthYear -currentYear);
// the above expression will not be execute as it endup concatenating 
// so inorder to type case we use the syntaxt as (data type) variable 
// example
const money ='2340';
console.log("money: " ,typeof(money));

let num1 = Number(money);
console.log(typeof(num1));



// converting : type cast
// Number();
// String(); or x.toString()






























const inputYear = '1991';
console.log(inputYear);
console.log(typeof(inputYear));
// this is string 

// to perform the calculation in two string we use eval();

let age = "23";
let age1="26";
console.log(age);
console.log(age1);
let outcome = age+age1;
console.log(outcome);
// as this both are of string type so they dont
// get execute to perform exectioin
let outcome1 = eval(age)+eval(age);
console.log(typeof(outcome1));
console.log(outcome1);

// what evaluate do 
// let see
console.log(eval('2+4'));
// it will solve the expersion if it is in the string as a whole but
// consider this 
 let a = '2';

 let b= '6' ;

 console.log(eval(a+b));
//  this all  perform concatenation
