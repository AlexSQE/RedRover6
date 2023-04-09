// let waist = 15;
// let star = '*';

// let space;
// let i;


// for (let count = 0; count <= waist; count += 1) {
//     i = waist - count;
//     space = '';
//     debugger
//     while (i) {
//         space = space + ' ';
//         i--;
//     }
//     console.log(space + star);
//     star = star + '**';
// }

// for (let count = 0; count < waist - 1; count++) {
//     i = waist - count - 2;
//     star = '*';
//     while (i) {
//         star = star + '**';
//         i--;
//     }
//     space = space + ' ';
//     console.log(space + star);
// }

let tree = ''
let x=7
let space = " "
let sum = 1
for (let i=1; i<=x; i++){
    tree += space.repeat(x-i) + "*".repeat (sum) + '\n'
    sum += 2
}
sum = x * 2 - 1
for (let i = x - 1 ; i >= 1; i--){
    tree += space.repeat(x-i) + "*".repeat (sum - 2) + '\n'
    sum -= 2
}
console.log (tree)
