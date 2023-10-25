// get the input from user as a text and set a max length and 
// find he remaining text or character
const prompt = require("prompt-sync")();
'use strict';

let letter;

let inputme = ()=>{
    letter = prompt("Enter the letter :");

    let max = 120 ;
    let leftchar = max - letter.length;
    let message = `${letter.length} is used .\n Remaining character ${leftchar}`;
    console.log(message);

}
inputme();
