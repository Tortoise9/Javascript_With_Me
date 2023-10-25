// BMI = mas / height^2

/*Mark and john are trying to compare their BMI (body mass index ) which calculated using formula
BMI=mass/height^2

Now 
1.store mark and john mass and height in variables 
2.Calculate both their BmI using the fomula 
3.Create a boolean variable 'MarkHigherBMI containing information about there mark has a higher
BMI than John

Test Data 1: Mark weight = 78kg  height =1.69
             jOHN weight  = 92kg height = 1.95
Test Data 2 : Mark Weight =95kg  height  1.88 tall 
John weight = 85kg height =1.76;

*/

let markMass, markHeight ,johnMass ,johnHeight ;

markMass= 78;
markHeight=1.69;
johnHeight=1.95;
johnMass=92;

const fMarkBMI = markMass/markHeight**2;
const fJohnBMI = johnMass/johnMass**2;

markMass= 95;
markHeight=1.88;
johnMass=85;
johnHeight=1.76;
const LmarkBMI= markMass/markHeight**2;
const LjohnBMI = johnMass/johnHeight**2;

let MarkHigherBMI = fMarkBMI>fJohnBMI;
console.log(MarkHigherBMI);
