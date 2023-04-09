// let n = NaN;

// if (Number(n) == 'Infinity') {
//   return n = "Input number is Number.POSITIVE_INFINITY";
// } else if (Number(n) == 1.7976931348623157e+308){
//   return n = "Input number is Number.MAX_VALUE";
// } else if (Number(n) == 'Infinity'){
//   n = "Input number is Number.NEGATIVE_INFINITY";
// } else if (Number(n) == 5e-324){
//   console.log("Input number is Number.MIN_VALUE")
// } else if (isNaN(n)){
//     console.log("Input number is Number.NaN");
//}

// lucky number

// function isLucky(n) {
//     let str = String(n);
//     let sum = 0;     
//     for(let i = 0; i< str.length; i++){
//       sum += (+str[i])
//     }
//     if (sum % 9 == 0) {
//       return true;
//     } else {
//       return false;
//     }  
// }
// console.log(isLucky(1892376))


//String.fromCharCode(65,66,67)
// result [{'118':'v'}, {'117':'u'}, {'120':'x'}]

// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ]

// for(let i = 0; i < list1.length; i++){
//   list1[i].greeting = `Hi ${list1[i].firstName}, what do you like the most about ${list1[i].language}?`
// }
// //let str = `Hi ${list1[0].firstName}, what do you like the most about ${list1[0].language}?`
// //console.log(str);
// // list1.map(n => { return list1[n].greeting = `Hi ${list1[n].firstName}, what do you like the most about ${list1[n].language}?`});
// // let list = list1.map(n => )
// console.log(list1)

// let s = [118,117,120];
// //         0   1   2
// function numObj(s){
//   const arr = []
//   for(i=0; i<s.length;i++){
//     const obj = {}
//     obj[s[i]] = String.fromCharCode(s[i])
//     arr.push(obj)
//     console.log(arr);
//   }
//   return arr
// }


// numObj(s)

let dict = {'a':6,'b':2,'c':4}
//let dict = {1:3,2:2,3:1}
function sortDict(dict){
  console.log(Object.keys(dict));
  return Object.keys(dict)
    .map(function(v){ return [+v || v, dict[v]] })
    .sort(function(a, b){ return a[1] < b[1] });
}
console.log(sortDict(dict))
