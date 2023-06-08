//let arr = [")", "(", "(", "[", "{", "}", "]", ")", ")", "[", "]", "(", '{'];
// let arr = ["(", "(", "(", "[", "]", "{", "}", ")", ")", "[", "]", ")"];

let str = '{[(({}])]()}'
let arr = str.split('');

let length = arr.length;
for (let i = 0; i < length; i++) {
  for (let j = 0; j < arr.length; j++) {    
    if (
      (arr[j] == "(" && arr[j + 1] == ")") ||
      (arr[j] == "{" && arr[j + 1] == "}") ||
      (arr[j] == "[" && arr[j + 1] == "]")
    ) {
      arr.splice(j, 2);
    }
  }
}
if (arr.length == 0) {
  console.log("All parentheses are having a pair");
} else {
  console.log("These parentheses don't have a pair - " + arr);
}

