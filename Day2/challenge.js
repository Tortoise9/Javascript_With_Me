// two teams Dolphins and Koalas 

const prompt = require("prompt-sync")();

let avg1 = (96+108 +89)/3;
let avg2 = (88+91+110)/3;
 let minimum = 100;

if((avg1>avg2) && (avg1>=100)){
    console.log(`Dolphins is a winner with avg of ${avg1}`)
}
else if ((avg1 === avg2 ) && ((avg1 >= 100)&&(avg2>=100))){
    console.log(`Draw `);
}
else if((avg2>avg1)&&(avg2>=100)) {
    console.log(`Koalas ia a winner with average of ${avg1}`)
}
else{
    console.log(`No  one win `);
}