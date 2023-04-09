// let strTask3 = "";
// let arrTask3 = [];
// let count = 0;

// for (let i = 0; i < 5; i++) { //this string will count  lines
    
//     for (let j = 0; j < i + 1; j++) {
        
//         if (j == 0) {
//             strTask3 += (j + 1) + i  + " ";
//         } 
//         if (j == 1) {
//             strTask3 += (j + 1) +  4 + (i - j) + " ";
//         } 
//         if (j == 2) {
//             strTask3 += (j + 1) + 4 + 3 + (i - j) + " ";
//         }
//          if (j == 3) {
//             strTask3 += (j + 1) + 4 + 3 + 2  + (i - j) + " ";
//         }
//         if (j == 4) {
//             strTask3 += (j + 1) + 4 + 3 + 2 + 1 + (i - j) + " ";
//         }

//     }

//     strTask3 += "\n";
// }

// console.log(strTask3);


let triangleHeight = 7
for (let i = 1; i <= triangleHeight ; i++){
    let numberinRow = i
    let delta = triangleHeight-1
    let workStr = ''
    for (let k=0; k<i; k++){
        workStr = workStr + numberinRow + ' ' // numberinRow.toString()
        numberinRow = numberinRow + delta
        delta--
    }
    console.log(workStr)
}


// //треугольник из чисел
// //n - количество строк в треугольнике
//
// //j - число, которое будет напечатано
// //k - разница между двумя числами в строке
// //q - количество чисел в строке
// function numTriangle(n) {
//     let str = '';
//     for (let i = 1; i <= n; i++) {
//         for (let j = i, k = n, q = 1; k >= 1, q <= i; k--, q++, j += k) {
//             let space = j < 10 && (n - i + j) >= 10 ? '  ' : ' '; //добавление лишних пробелов для правильного форматирования
//             str = str + space + j;
//         }
//         str += '\n';
//     }
//     return str;
// }
// console.log(numTriangle(11));


// Ekaterina Bondarenko

// let array = ['(', ')', '(', ')', ')'];

// let count = 0;
// for (i = 0; i < array.length; i++) {
//     if (array[i] == '(') { //обращаемся к элементу массива
//         count += 1; // count = count + 1;
//     }
//     if (array[i] == ')') {
//         count -= 1; // count = count - 1;
//     }
// }

// if (count == 0) {
//     console.log("true/each parenthesis has a corresponding pair(opening and closing)");
// } else {
//     console.log("false/one of the parenthesis does not have a matching pair (opening and closing)");
// }

// console.log("\nTask 4_code NalyaSh");
// let array1 = ['(', ')', '(', ')', ')'];

// let sum3 = 0;
// let sum4 = 0;
// for (i = 0; i < array1.length; i++) {
//     if (array1[i] == '(') {
//         sum3 += 1;
//     } else if (array1[i] == ')') {
//         sum4 += 1; 
//     }
// }
// console.log("opening = " + sum3, "closing = " + sum4);
// if (sum3 == sum4) {
//     console.log("equal");
// } else {
//     console.log("not equal");
// }


// Konstantin L

// function brackets() {
//     let arr = ['{', '(', ')', ')', '}'];
//     let arrNew = [];
// ​
//     for (let i = 0; i < arr.length; i++) {
//         if ('{' == arr[i] || '(' == arr[i] || '[' == arr[i]) {
//             arrNew.push(arr[i])
//         } else {
//             if (arrNew.length == 0) {
//                 return false;
//             }
//             let bracket = arrNew.pop()
//             if (arr[i] == '}' && bracket != '{') {
//                 return false;
//             }
//             if (arr[i] == ')' && bracket != '(') {
//                 return false;
//             }
//             if (arr[i] == ']' && bracket != '[') {
//                 return false;
//             }
//         }
//     }
// ​
//     if (arrNew.length == 0) {
//         return "Good!";
//     }
// }
// ​
// console.log(brackets());


