//5.2 Coffee brewing algorithm with coffee maker
const prompt = require('prompt-sync')();

const nameOfCoffee1 = 'Espresso';
const nameOfCoffee2 = 'Americano';
const nameOfCoffee3 = 'Latte';
const coffeeBlend1 = '100% Arabica';
const coffeeBlend2 = '90% Arabica + 10% Robusta';
const waterSmall = '25 ml';
const waterMiddle = '150 ml';
const waterBig = '300 ml';

let price = 3.95;

let nameOfCoffee;
let coffeeBlend;
let cup;
let water;


nameOfCoffee = prompt(`Input type of coffee you would (${nameOfCoffee1}, ${nameOfCoffee2}, ${nameOfCoffee3}) `, `${nameOfCoffee1}`);

coffeeBlend = prompt(`Input "1" if you want ${coffeeBlend1} or "2" if you want ${coffeeBlend2} `, '1');
if (coffeeBlend === "1") {
    coffeeBlend = coffeeBlend1;
} else {
    coffeeBlend = coffeeBlend2;
}

cup = prompt('What cup your would? (Small, Middle, Big) ', 'Middle');
if (nameOfCoffee === nameOfCoffee1 && cup !== 'Small') {
    console.log(`Sorry, ${nameOfCoffee1} is available only in Small size cup (${waterSmall})!`);
    let decision = prompt(`Are you agree with Small size cup? (Yes/No)`)
    if (decision =='Yes') cup = 'Small';
    else {
        console.log('Have a nice day!');
        return; //break
    }
}

if (cup === 'Small') water = waterSmall;
 else if (cup === 'Middle') {
    water = waterMiddle;
    price = price + 1.5;
} else {
    water = waterBig;
    price = price + 2;
}

console.log(`So, you chose is ${nameOfCoffee} from ${coffeeBlend} in ${cup} cup.`);
console.log(`Price of this coffee is $${price}.`)
console.log('This is instruction how you can make coffee with these coffee maker.');
console.log(`1. Take a ${cup} cup and put it into the coffee maker.`);
console.log(`2. Press the icon "Start" on the screen.`);
console.log(`3. After a while, coffee maker prepare ${water} delicious ${nameOfCoffee} from ${coffeeBlend}.`);
console.log(`4. When ${nameOfCoffee} is done, you will see "Ready" on the screen.`);
console.log(`5. Enjoy your coffee!`);