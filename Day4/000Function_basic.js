'use strict ';

const prompt = require("prompt-sync")();

let name = prompt("Enter your name ? ");

function logger(){ // function
    console.log("my name is  ",name );
}

logger(); // calling function 
// we can call function as many time we want 
logger();
logger();

function display(firstname , lastname){
    console.log("My name is ",firstname ,lastname);
}

display("sushil","pandey");

function fruit(apple , mango ){
    const value = `Juice from apple is ${apple} and  mango : ${mango}`;
    return value ;
}
let juicyjuice = fruit(2,4);
console.log(`Juicy juice : ${juicyjuice}`);
const beerjuice = fruit(10,2);
console.log(`Bear juice : ${beerjuice}`);

// console.log() is also the function 
// also Number(value) is also the function
// all are function that have () parenthesis 