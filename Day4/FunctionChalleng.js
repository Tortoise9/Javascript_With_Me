'use strict';
let k =0;

document.writeln(`<center><h1>Count</h1></center>`)
// document.writeln(`<center><p id="one">${value1}</p></center>`);
document.writeln(`<center><p id="one"></p></center>`);
document.writeln(`<br> <br> <button>Count me</button>`)
// let target1 = document.getElementById("one");

console.log(king);
document.getElementById("one").style.font = "40px";
let btn1= document.getElementsByTagName("button")[0];
console.log(btn1);

btn1.addEventListener('click', e => {

    k =k+1;
    document.querySelector("#one").innerHTML= k;
});
