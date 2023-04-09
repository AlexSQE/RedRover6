// let str = '';

// function checkPalindrome(str) {
//     str = str.toLowerCase().replaceAll(' ', '').replaceAll('?', '').replaceAll(',', '').replaceAll('!', '');  
//     return str === str.split('').reverse().join('');
// }

// console.log(checkPalindrome('alla Alla!'))


function nthFibo(n) {
    let n1 = 0;
    let n2 = 1;
    let sum = 0;
    for (let i = 1; i < n; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    }
     return n1;
  }
  console.time() 
  console.log(nthFibo(4));
  console.timeEnd();

