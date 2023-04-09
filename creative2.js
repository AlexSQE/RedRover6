//5.2 Coffee brewing algorithm with coffee maker

const recipe1 = 'Espresso';
const recipe2 = 'Americano';
const recipe3 = 'Latte';
const coffee1 = '100% Arabica';
const coffee2 = '90% Arabica + 10% Robusta';
const waterSmall = '25 ml';
const waterMiddle = '150 ml';
const waterBig = '300 ml';
const priceCupSmall = 4;
const priceCupMiddle = 5;
const priceCupBig = 6;

let recipe;
let coffee;
let cup;
let water;
let price;

 alert(`This coffee maker can make ${recipe1}, ${recipe2} and ${recipe3}.`)
 
 recipe = prompt(`Input type of coffee you would (${recipe1}, ${recipe2}, ${recipe3})`, `${recipe3}`);
 if (recipe !== `${recipe1}` && recipe !== `${recipe2}` && recipe !== `${recipe3}`) {
    recipe = prompt(`Please enter coffee name carefully (${recipe1}, ${recipe2}, ${recipe3})`, `${recipe3}`);
}
 coffee = prompt(`Input "1" if you want ${coffee1} or "2" if you want ${coffee2}`, '1');
 if (coffee !== '1' && coffee !== '2') {
    coffee = prompt(`Please enter type of coffee carefully (1 = ${coffee1} or 2 = ${coffee2})`, '1');
}
if (coffee === "1") {
    coffee = coffee1;
} else {
    coffee = coffee2;
}
 cup = prompt('What cup your would? (Small, Middle, Big)', 'Middle');
if ((recipe === recipe1 && cup === 'Big') || (recipe === recipe1 && cup === 'Middle')) {
    document.write(`Sorry, ${recipe1} is available only in Small size cup!`, "<br>", "<br>");
    cup = 'Small';
}

if (cup === 'Small') {
    water = waterSmall;
    price = priceCupSmall;
} else if (cup === 'Middle') {
    water = waterMiddle;
    price = priceCupMiddle;
} else {
    water = waterBig;
    price = priceCupBig;
}


document.write(`So, You chose is ${recipe} from ${coffee} in ${cup} cup.`, "<br>", "<br>");
document.write(`Price of this coffee is $${price}.`,"<br>", "<br>")

document.write('This is instruction how you can make coffee with these coffee maker.', "<br>");
document.write(`1. Take a ${cup} cup and put it into the coffee maker.`, "<br>");
document.write(`2. Press the icon "Start" on the screen.`, "<br>");
document.write(`3. After a while, coffee maker prepare ${water} delicious ${recipe} from ${coffee}.`, "<br>");
document.write(`4. When ${recipe} is done, you will see "Ready" on the screen.`, "<br>");
document.write(`5. Enjoy your coffee!`, "<br>");