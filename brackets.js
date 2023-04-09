// let arr = [")", "(", "(", "[", "{", "}", "]", ")", ")", "[", "]", "(", '{'];
// // let arr = ["(", "(", "(", "[", "]", "{", "}", ")", ")", "[", "]", ")"];
// let length = arr.length;
// for (let i = 0; i < length; i++) {
//   for (let j = 0; j < arr.length; j++) {    
//     if (
//       (arr[j] == "(" && arr[j + 1] == ")") ||
//       (arr[j] == "{" && arr[j + 1] == "}") ||
//       (arr[j] == "[" && arr[j + 1] == "]")
//     ) {
//       arr.splice(j, 2);
//     }
//   }
// }
// if (arr.length == 0) {
//   console.log("All parentheses are having a pair");
// } else {
//   console.log("These parentheses don't have a pair - " + arr);
// }

let arr = ["a", "b", "c", "d"];

// let arr1 = arr;

let arr1 = arr.slice();


arr.splice(0, 2);
//arr.slice(0, 2);


console.log(arr)
console.log(arr1)

