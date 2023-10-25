let age = "34";
Number(age);
console.log(typeof(age));
console.log(Number(age));
console.log(typeof(Number(age)));

console.log(Number('sushil'));
// Nan is the function that provide true or false
// based on the given string is number 
console.log(typeof NaN);

console.log(String(23),23);
// type casted 
// in typecasting we can only convert into number and a string 
//  undefined or null 



// type coercion

console.log("I am " +23 +" years old ", 23);
// string and number have diffrent color 
// + or coercion into string which is similar to 
// "iam 23 years old "
// it happen automatically

console.log('23'-'10' -3 , 10);
// - tigger the opposite conversion into 
// number and + tigger coercion into the string 

console.log("12" *3, 36);

console.log('23' > 3);
// only + tigger the coercion for the string 

// guess the output 

let n = '1'+1 ; //=11 
n = n-1; //11-1 =10
console.log(n);
// value will be 10 
let k = ' 1'+1 ; //=11 
k = k-1; //11-1 =10
console.log(k);
// value will be 10 


// This will trow the error
let m= '1 '+1 ; //=1 1 
m= m-1; //1 1-1 = NaN //not a number 
console.log(m);


// another 
 console.log( 2 + 4 +2 +'9'); // 89 will be result which will be String 