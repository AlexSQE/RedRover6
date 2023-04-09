//alert("It's simple calculator. Please input only number or +, -, *, /")

// let number1 = prompt("Please enter first number",);
// let assignment = prompt("Please enter assignment",);
// if (assignment !== '+' && assignment !== '-' && assignment !== '*' && assignment !== '/') {
//     assignment = prompt("Please enter assignment carefully",);
// }
// let number2 = prompt("Please enter second number",);

// number1 = Number(number1);
// number2 = Number(number2);

// if (number2 === 0 && assignment === '/') {
//     console.log('Result is Infinity');
// } else if (assignment === '*') {
//     console.log( number1 * number2 );
// } else if (assignment === '/') {
//     console.log( number1 / number2 );
// } else if (assignment === '+') {
//     console.log( number1 + number2 );
// } else if (assignment === '-') {
//     console.log( number1 - number2 );
// } else {
//     console.log('Please, input only number or +, -, *, / ! Or call developer')
// }

function calc(a, b, operator) {
    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/'){
        return "Please enter operator carefully";
    } 

    if (b === 0 && operator === '/') {
        return 'Result is Infinity';
    } else if (operator === '*') {
        return a * b;
    } else if (operator === '/') {
        return a / b;
    } else if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else {
        return 'Please, input only number or call developer';
    }
}

console.log(calc(2, 4, '*' ))