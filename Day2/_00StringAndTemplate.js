console.log("hello world");
const firstName = "sushil";
const job = "programmer";
const birthDayYear= 2001;
const currentYear = 2023;

const jonas = "i'm " + firstName +',\na '+job+ "\n Iam "+(currentYear-birthDayYear) +" Year old " +" \n Job : " + job +"!";
console.log(jonas);
// Template variable  (``) (`` backtick )
// 
// String literal

const jonasNew = `I'm  ${firstName} \n Iam ${currentYear-birthDayYear} Year old .`;
console.log(jonasNew);
document.writeln("<h1 id='top'> Top three songs </h1>");
document.body.style.backgroundColor="lightgrey";
document.getElementById("top").style.textAlign="center";

const song1 = "what was i made for ";
const singer1 = "Bille Eilish";
document.writeln(`<dl><dt>1.${singer1} :</dt> <dd>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <q>${song1}</q></dd></dt></dl`)

