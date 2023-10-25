// function declaration
function calAge(birthyear){ //birthyear = local variable
    // placeholder is with the function
    const currentYear = 2023;
    const age = currentYear-birthyear;
    return age ;
}

const age = calAge(2001); //2001 argument 
const age1 = calAge(2000);
console.log(age,age1);

// divide 24 by 5 
// anonymous
const remainder = function (){
   return  24%5;
}

const answer= remainder();
console.log(answer);

