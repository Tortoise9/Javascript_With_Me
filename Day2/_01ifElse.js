let age = parseInt(prompt("Enter your age ; "))
let flag = age>=19;
document.body.style.textAlign ="center";
if(flag){
    document.writeln(`<h1>Your age is ${age} .<br> You are eligible for driving  license</h1>`);
}
else{
    document.writeln(`<h1>Your age is only ${age} .<br> You have to grow up first ${18-age} Year left. </h1>`);
}

