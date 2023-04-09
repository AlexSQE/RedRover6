// let str = 'Live k k ';

// let str1 = str.toLowerCase().split('').reverse().join('').replaceAll(' ','');

// console.log(str1);


// if(str.toLowerCase().replaceAll(' ','') === str1) {
//     console.log('true')
// } else {
// console.log('false')    
// }

// console.log(str1);

// let arr = [1, 2, 3]
// console.log(arr.reverse())

// function fib(n){
//    if(n == 0) return 0;
//    if(n == 1) return 1;
//    return fib(n-1) + fib(n-2); 
// }

// console.log(fib(8))

// function generate(seed) {
//     var private = seed;
//     return function (param) {
//       private += seed;
//       return private + param;
//     };
//   }
  
//   var a = generate(1);
//   var b = generate(2);

//   console.log(a(1) + a(2) + b(3) + b(4))

// const arrey = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];
// // vernut prostye cifry v massive
// function isPrime(num) {
//   for(let i = 2; num > i; i++) {
//     if (num % i == 0) {
//         return false;
//     }
//   }
//   return num > 1;
// }

// console.log(arrey.filter(isPrime));


function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }

  console.log(pow(2,3));

// Dmitry
  function isPallindrom (phrase) {
    phrase = phrase.split(':',',','-', ' ').join('').toLowerCase().replace(/\s/g,'');  // удаленіе всех пробелов
    let arr1 = phrase.split('');
    arr1.reverse();
    //return phrase;

    //let a = arr1.join('').toLowerCase().replaceAll(',').replace(/\s/g,''); 
    //let b = arr1.reverse().join('').toLowerCase().replaceAll(',').replace(/\s/g,'');
     //a = a.replace(/\s/g,'');
     //b = b.replace(/\s/g,'');
    // let re = /\s*;\s*/;
    // let nameList = a.split(re);
      //a = a.split(',').join('');
      //b = b.split(',').join('');
  console.log(phrase);
    //console.log(a);
    //console.log(b);
return arr1.join() === arr1.reverse().join(); 

}
console.log(isPallindrom ("A man, a plan, a canal: Panama"));