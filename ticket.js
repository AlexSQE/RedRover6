const prompt = require('prompt-sync')();

let ticketPrice = 100;
console.log(`Regular ticket price $${ticketPrice}`)
let passOld = prompt('How old are you: ');


if (passOld < 2) {
    ticketPrice = ticketPrice * 0.1;
} else if (passOld < 18) {
    ticketPrice = ticketPrice * 0.5;
} else if (passOld < 65) {
} else {
    ticketPrice = ticketPrice * 0.6;
}
console.log(`Ticket price: $${ticketPrice}`)