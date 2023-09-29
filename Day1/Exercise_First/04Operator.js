// operator 
// Note use const for constant and let for changing value

// 1.Arthimetic operator 
// (+,-,/,*,**)
const myBirthYear = 2057-56;
const currentDate =2023;
let age = currentDate-myBirthYear;
console.log(myBirthYear,"\n",age);
// ** it is exponential example find the power of 2 raised by 8 
console.log("\n ",2**8);

// 2.Assignment Operator (-=,+=,*=,)
let x = 5;
x = x+5;
// or x +=5;
console.log("\n",x); 

// create a program to print the multiple table of 12 upto 10
let mul =0;
for(let i =0;i<=9;i++){
mul = mul + 12;
  console.log(mul)
   
}

// increment and decrement (i++, i--,--i , ++i )
let a = 10;
console.log(a++);
console.log(a);
console.log(++a);

// comparsion operator (===, == , > , < ,<= , !=)
// it return bool 
age =23;
if(age ==23){
    console.log("you are not adult ")
}

// which is 
if(true){
    console.log("\nyou are not  adult ")
}
// comparsion /relational operator  return bool as a result 
if(1){
    console.log("this is also the type");
}
// 1 = true  0=false in digital scenario
// bitwise operators (>> << <<= >>=) etc

// Logical operator : 
//  (And ==&&) , (or = ||) , (bitwisexor = ^),bitwise and & bitwise or =|

if(1&&1){
    console.log("1*1 = 1 in and")
}
if(1&&0){
    // this return boolean false so it doesn't run 
    console.log("1*0 = 1 in and")
}