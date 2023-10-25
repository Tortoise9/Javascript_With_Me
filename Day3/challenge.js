/*
steven wants to build a very simple tip calculator
for whenecer he goes eating in a resturant in his country it's
usual to tip 15% if the bill value is between 50 and 300
if the value is different the tip is 20%
 */
const prompt = require('prompt-sync')();
let bill = Number(prompt("Enter the bill : ")); 
const tip = ((bill>=50)&&(bill<=300)) ?  15 : 20;
let tipsValue = bill*(tip/100);
let finalValue = bill+tipsValue;
console.log(`The bill value of your table is ${bill}`);
console.log(`\nThe tips by you is ${tip}`);
console.log(`Your recent payment is ${finalValue}`);
