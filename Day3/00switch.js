// const prompt = require('prompt-sync')();
// we can use if and else instead of it 
let day =prompt("Enter the day : ");
const daylower = day.toLowerCase();
console.log(daylower);
switch(daylower){
    // case 'monday'
    case "sunday":
        document.writeln(`First day ${daylower}`);
        break;
    case "monday":
        document.writeln(`Seconde day : ${daylower}`);
        break;
    case "tuesday":
        document.writeln(`Third day :${daylower}`);
        break;
    case "wednesday":
        document.writeln(`Fourth day : ${daylower}`);
        break;
    case "thrusday":
        document.writeln(`fifth day : ${daylower}`);
        break;
    case "friday":
        document.writeln(`sixth day : ${daylower}`);
        break;
    case "saturday":
        document.writeln(`last day : ${daylower}`);
        break;
    default:
        document.writeln(`your enter vlau e is not a day `);
        break;
}