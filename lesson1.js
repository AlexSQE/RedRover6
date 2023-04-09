let firstName = "John";
let lastName = "Adams";

console.log(firstName, lastName);

firstName = "Anna";
lastName = "Karenina";

console.log(firstName, lastName);

// 2. Output on console
let a;
let c = 9;
let str = "Hi 5!";
let b = true;
let y = 9 + `1`;
let x =  'a' / 6;

console.log(`The variable a is ${a}. It type is `, typeof(a));
console.log(`The variable c is ${c}. It type is `, typeof(c));
console.log(`The variable str is ${str}. It type is `, typeof(str));
console.log(`The variable b is ${b}. It type is `, typeof(b));
console.log(`The variable y is ${y}. It type is `, typeof(y));
console.log(`The variable x is ${x}. It type is `, typeof(x),'.');
console.log('(NaN is short for "Not-a-Number". In JavaScript, NaN is a number that is not a legal number.)');

//3. const variable
const speedOfLight = 299792458; // m/sec
const bestFreeSchool = "RedRover.school";
const nameOfGreatGrandmother = "Elena";

console.log(`Speed Of Light = ${speedOfLight} m/s.`);
console.log(`The best Free School is ${bestFreeSchool}.`);
console.log("Name of great-grendmother is ", nameOfGreatGrandmother, ".")

//5. Coffee brewing algorithm with coffee maker
let recipe1 = 'Espresso';
let recipe2 = 'Americano';
let coffee1 = '100% Arabica';
let coffee2 = '90% Arabica + 10% Robusta';
let waterSmall = '25 ml';
let waterMiddle = '150 ml';
let cupSmall = 'small cup';
let cupMiddle = 'middle cup';

console.log('This is instruction how you can make coffee with these coffee maker.');
console.log(`This coffee maker can make ${recipe1} or ${recipe2}.`);
console.log(`If you want to make ${recipe1}, please follow this steps:`);
console.log(`1. Take a ${cupSmall} and put it into the coffee maker.`);
console.log(`2. Choose the type of coffee on the screen: "${coffee1}" or "${coffee2}".`);
console.log(`3. Press the icon ${recipe1} on the screen.`);
console.log(`4. After a while, coffee maker prepare ${waterSmall} delicious ${recipe1}.`);
console.log(`5. When ${recipe1} is done, you will see "Ready" on the screen.`);
console.log(`6. Enjoy your coffee!`);


console.log(`If you want to make ${recipe2}, please follow these steps:`);
console.log(`1. Take a ${cupMiddle} and put it into the coffee maker.`);
console.log(`2. Choose the type of coffee on the screen: "${coffee1}" or "${coffee2}".`);
console.log(`3. Press the icon ${recipe2} on the screen.`);
console.log(`4. After a while, coffee maker prepare ${waterMiddle} delicious ${recipe2}.`);
console.log(`5. When ${recipe2} is done, you will see "Ready" on the screen.`);
console.log(`6. Enjoy your coffee!`);

// 5.1 Coffee brewing algorithm
let liquidTemp3 = 'hot';
let liquidTemp2 = 'warm';
let liquidTemp1 = 'cold';
let liquid2 = 'milk';
let liquid1 = 'water';
let topping2 = 'cinnamon';
let topping1 = 'cacao';




//extra
//2.1
let stringQa = 'JS for QA Automation';
console.log(`Length of string "${stringQa}" is ${stringQa.length}`);

//2.2
console.log(stringQa.indexOf("Q"));
console.log(stringQa[7]);