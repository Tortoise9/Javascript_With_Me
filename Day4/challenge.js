/*
we have two gymnastic team the dolphins and 
koalas 
each team competes 3 times and then the average of the 3 score is 
calculated
team wins only if it has at least double the average score of other

*/
const prompt = require('prompt-sync')();
let sumD =0;
let n = Number(prompt("Enter the no of sample ?"));
let count=0;
for(let i=0;i<n;i++){
    let score =Number(prompt("Enter the score for Dolphins :"));
    sumD = sumD+score;
    count=count+1;
}
let sumK =0;
for(let i=0;i<n;i++){
    let score =Number(prompt("Enter the score for Koalas :"));
    sumK = sumK+score;
}

const avgf =(a)=>{
    return (Math.round(a/n));
}

function checkWinner(){
    if(avgf(sumD)>2*avgf(sumK) ){
        console.log(`Dolphin win ${avgf(sumD)} vs ${avgf(sumK)})`);
    }
    else if (avgf(sumK)>2*avgf(sumD)){
        console.log(`Koalas win ( ${avgf(sumK)} vs ${avgf(sumD)} )`);

    }
    else{
        console.log("No winner");
    }
}

checkWinner();