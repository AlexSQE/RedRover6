// function nthFibo(n) {
//     let n1 = 0;
//     let n2 = 1;
//     let sum = 0;
//     for (let i = 1; i < n; i++) {
//     sum = n1 + n2;
//     n1 = n2;
//     n2 = sum;
//     }
//      return n1;
//   }
//   console.time() 
//   console.log(nthFibo(1000));
//   console.timeEnd();

//   function nthFibo1(n) {
//     if (n <= 1) {
//       return n;
//     }
//     return nthFibo(n - 1) + nthFibo(n - 2);
//   }
  
//   console.time(1) 
//   console.log(nthFibo1(1000));
//   console.timeEnd(1);



  function factorial(n) {
    if (n === 0 ) {
      return 1;
    }
    return n * factorial(n - 1);
  }

// 4 * 3 * 2 * 1 * 1


// console.time(2)
//console.log(factorial(200));
// console.timeEnd(2)

//   function fact(n) {
//     let result = 1;    
//     for (let i = 1; i <= n; i++) {  //  1*2 // 2*3 // 6*4
//       result = result * i;
//     }
//     return result;
//   }
  
  //console.time(3) 1*2*3*4
//   console.log(fact(3));
  //console.timeEnd(3)