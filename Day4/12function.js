'use strict';
const prompt = require('prompt-sync')();

// let 
let birthYear = Number(prompt("Enter the birth year ? "));
let currentYear = Number(prompt("Enter the current year ? "));
// know find the age 
let age =()=>{
    return currentYear-birthYear;
}
// year to retirement 
const retire = 65;
let retirementYear = function (){
    return retire-age();
}
console.log(`Your age : ${age()}`);
console.log(`Year left for retirement : ${retirementYear()}`);