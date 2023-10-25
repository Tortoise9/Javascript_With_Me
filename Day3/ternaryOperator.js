const prompt = require('prompt-sync')();
let age = prompt("Enter the age ? ");

let drink = age>18 ? "🍻🍺" : "💦💧";
console.log(drink);
console.log(`i can eat ${drink}`)