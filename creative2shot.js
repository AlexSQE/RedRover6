//5.2 Coffee brewing algorithm with coffee maker
// const prompt = require('prompt-sync')();

const recipe1 = 'Espresso';
const recipe2 = 'Americano';
const recipe3 = 'Latte';
const coffee1 = '100% Arabica';
const coffee2 = '90% Arabica + 10% Robusta';
const waterSmall = '25 ml';
const waterMiddle = '150 ml';
const waterBig = '300 ml';

let price = 3;
let recipe;
let coffee;
let cup;
let water;


recipe = prompt(`Input type of coffee you would (${recipe1}, ${recipe2}, ${recipe3}) `, `${recipe1}`);

coffee = prompt(`Input "1" if you want ${coffee1} or "2" if you want ${coffee2} `, '1');
if (coffee === "1") {
    coffee = coffee1;
} else {
    coffee = coffee2;
}

cup = prompt('What cup your would? (Small, Middle, Big) ', 'Middle');
if (recipe === recipe1 && cup !== 'Small') {
    console.log(`Sorry, ${recipe1} is available only in Small size cup (${waterSmall})!`);
    cup = 'Small';
}

if (cup === 'Small') {
    water = waterSmall;
} else if (cup === 'Middle') {
    water = waterMiddle;
    price = price++;
} else {
    water = waterBig;
    price = price + 2;
}

console.log(`So, you chose is ${recipe} from ${coffee} in ${cup} cup.`);
console.log(`Price of this coffee is $${price}.`)
console.log('This is instruction how you can make coffee with these coffee maker.');
console.log(`1. Take a ${cup} cup and put it into the coffee maker.`);
console.log(`2. Press the icon "Start" on the screen.`);
console.log(`3. After a while, coffee maker prepare ${water} delicious ${recipe} from ${coffee}.`);
console.log(`4. When ${recipe} is done, you will see "Ready" on the screen.`);
console.log(`5. Enjoy your coffee!`);