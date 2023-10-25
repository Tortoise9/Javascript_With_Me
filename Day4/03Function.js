function logger(){
    console.log("my name is sushil pandey");
}
document.writeln(`<button>Click me </button>`);
// let k =document.querySelector("button")[0];
// console.log(k);
// k.onclick = logger();
let see=document.getElementsByTagName("button")[0];
see.onclick = logger;
// function call
// let one =document.getElementsByTagName("button")[0];
// one.addEventListener('click' , function(){
//     console.log("aayan xettri");
// })
