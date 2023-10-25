// nested funtion 
const prompt = require('prompt-sync')();
function nested () {
    let choiceone = prompt("what juice do you want ");
        let bottleno = bottle();
        display(choiceone,bottleno);
    
}
function bottle(){
    let bottleno = Number(prompt(`Enter the no of bottle you want :`));
    return bottleno ;
}

let display= (fruit, no)=>{
    console.log(`Take ${no} bottle .\nJuice of ${fruit} `)
}

nested();