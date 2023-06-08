function printName (a) {
    console.log (a);
}
printName('Alex');

let a = function (a) {
    console.log(a);
}
a('Alex');

let b = ( (b) => { console.log(b); return b;})
b('Alex');

let x = (c, v) => console.log(c);
x('Alex');

let d = d => console.log(d);
d('Alex');

d => d = d + 1;