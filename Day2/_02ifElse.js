let age ;
age = parseInt(prompt("Enter your age :"));
if(age<18){
    document.querySelector("body").style.backgroundColor="red";
}
else{
    document.querySelector("body").style.backgroundColor="blue";
}