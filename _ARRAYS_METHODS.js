//===================================================  ARRAYS   METHODS  ==================================================

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// .join()  ==============================================================================================================  JOIN
// конвертирует массив в строку
// по умолчанию разделяет символы запятой, начальный массив не меняет
// join()  join(separator)
{
  let array = ['a', 'b', 'c', 1, 2, 3];
  console.log(array);                   // [ 'a', 'b', 'c', 1, 2, 3 ]
  
  console.log(array.join());       // a,b,c,1,2,3    -- сепаратор не указан, символы выводятся через запятую
  console.log(array);              // [ 'a', 'b', 'c', 1, 2, 3 ]
  
  console.log(array.join(""));    // abc123   -- указан сепаратор "", символы выводятся без запятой
  }   
  
  //.push()  ================================================================================================================  PUSH 
  // добавляет элемент(ы) в конец, изменяет начальный массив
  // push(element0)    push(element0, element1)      push(element0, element1, /* … ,*/ elementN)
  {
  let letters = ['a', 'b', 'c', 'd', 'e'];
  console.log(letters);       // [ 'a', 'b', 'c', 'd', 'e' ]
  
  console.log(letters.push('f', 's'));   // 7 -- выводит длину нового массива
  letters.push(1, 5)
  letters.push(88)
  let c = letters.push('g');  
  console.log(letters);      // ['a', 'b', 'c', 'd', 'e',  'f', 's', 1,   5,   88,  'g']
  console.log(c);            // 11  
  }
  
  //.push() + spread operator ...  ================================================================================  PUSH + SPREAD OP
  //добавляет к массиву другой массив целиком     
  {
  const vegetables = ["parsnip", "potato"];
  const moreVegs = ["celery", "beetroot"];
  vegetables.push(...moreVegs);
  console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
  
  // spread operator (...)
  
  const numbers = [4, 8, 99, 9, 7, 777, 54];
  console.log(numbers);       // [4, 8, 99, 9, 7, 777, 54]
  console.log(...numbers);   // 4 8 99 9 7 777 54
  
   console.log(Math.max(4, 8, 99, 9)); // 99
  
   console.log(Math.max(numbers));   // NaN - с обычным массивом не работает
   console.log(Math.min(...numbers));  // 4   - после спрэда  - работает
   console.log(Math.max(...numbers))   // 777
  }
  
  // .pop() =============================================================================================================    POP  
  // удаляет последний элемент и возвращает этот элемент!   изменяет начальный массив
  // pop() 
  {
  let letters = ['a', 'b', 'c', 'd', 'e'];
  let a5 = letters.pop();           // возвращает удаленный элемент
  console.log(a5);                 // e
  console.log(letters);           // [ 'a', 'b', 'c', 'd' ]
   
  let t = [];
  letters[1] = "B";               // поменяли второй элемент массива letters
  console.log(letters.join());   // a,B,c,d
  
  t.push(a5);       // добавили в новый пустой массив t удаленный элемент 'e'
  console.log(t);   // [ 'e' ]
  
  let a = letters.pop();      // удалили из массива letters последний элемент
  
  console.log(letters);  // [ 'a', 'B', 'c' ]
  console.log(a);        // d 
  
  t.push(a);          // добавили в массив t удаленный элемент 'd' из массива letters
  console.log(t);      // [ 'e', 'd' ]
  }
  
  // .unshift() ==========================================================================================================  UNSHIFT 
  // добавляет элемент(ы) в начало массива,   изменяет начальный массив
  // unshift(element0)   unshift(element0, element1)   unshift(element0, element1, /* … ,*/ elementN)
  {
  const bigLetters = ['A', 'B', 'C', 'D', 'E'];
  
  bigLetters.unshift('Z');
  let d = bigLetters.unshift([1,2, 3], 'Y','88', "KH");   
  console.log(bigLetters);       // [ [ 1, 2, 3 ], 'Y', '88', 'KH', 'Z', 'A', 'B', 'C', 'D', 'E' ]
  console.log(d)               // 10
  }
  
  // .shift() =============================================================================================================   SHIFT
  // удаляет первый элемент, сдвигая массив влево. возвращает удаленный эл. изменяет начальный массив
  // shift()
  {
  bigLetters.shift();
  let z = bigLetters.shift();
  console.log(bigLetters); // ['88', 'KH', 'Z', 'A',  'B',  'C', 'D',  'E']
  console.log(z)  // Y
  }
  
  // .concat() ============================================================================================================   CONCAT
  // используется для объединения массивов. не меняет начальный массив, возвращает новый.
  // concatenation - не используется! - возвращает строку!
  // concat()   concat(value0)    concat(value0, value1)
  {
  let letters = ['a', 'b', 'c', 'd', 'e'];
  const bigLetters = ['A', 'B', 'C', 'D', 'E'];
  let v = letters + " " + bigLetters
  console.log(letters + " " + bigLetters);   // a,b,c,d,e A,B,C,D,E   
  console.log(typeof v)   // string
  
  let girls = ["Cecilie", "Lone"];
  let boys = ["Emil", "Tobias", "Linus"];
  let freinds = ["Olya", 'Oleg']
  const myChildren = girls.concat(boys, freinds);   //  concatenates three arrays
  
  console.log(girls)        // [ 'Cecilie', 'Lone' ]
  console.log(myChildren)   // [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus',   'Olya', 'Oleg']
  }
  
  
  // .toString()  =========================================================================================================   TOSTRING
  //преобразует массив в строку
  {
  let fruits = ["Banana", "Orange", "Apple", "Mango"]
  console.log(fruits)                           //  [ 'Banana', 'Orange', 'Apple', 'Mango' ]
  console.log(fruits.toString())               // Banana,Orange,Apple,Mango
  let f = fruits.toString()
  console.log(typeof f)                       // string
  }
  
  // .includes()   =========================================================================================================  INCLUDES
  // проверяет, содержит ли массив указанное значение, возвращает true/false
  // includes(searchElement)   includes(searchElement, fromIndex)
  {
  console.log( [1, 2, 3].includes(2)); // true
  console.log( [1, 2, 3].includes(3, -1)); // true   
  
  const arr = ["a", "b", "c"];
  console.log(arr.includes("c", 3)); // false
  console.log(arr.includes("c", 100)); // false
  console.log(arr.includes("a", -100)); // true   -- ищет по всему массиву
  }
  
  //.reverse() =============================================================================================================   REVERSE 
  // разворачивает массив на месте, изменяет начальный массив
  {
  const items = [1, 2, 3];   
  console.log(items.reverse());  // [ 3, 2, 1 ]
  console.log(items);    // // [ 3, 2, 1 ]
  }
  
  //.find()  ===============================================================================================================   FIND 
  // находит первый элемент, который удовлетворяет функции-условию в скобках
  //find(callbackFn)   find(callbackFn, thisArg)
  {
  const array1 = [5, 12, 8, 130, 44];
  const found = array1.find(element => element > 10);
  console.log(found);   // 12
  }
  
  //.filter() ==============================================================================================================   FILTER 
  // создает копию части массива, удовлетворяющей функции-условию в скобках
  //filter(callbackFn)   filter(callbackFn, thisArg)
  {
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  const result = words.filter(word => word.length > 6);
  console.log(result);  // [ 'exuberant', 'destruction', 'present' ]
  }
  
  //.every() ================================================================================================================   EVERY 
  // проверяет, соотв. ли все элементы массива функции-условию в скобках. возвращает boolean
  //every(callbackFn)  every(callbackFn, thisArg)
  {
  const isBelowThreshold = (currentValue) => currentValue < 40;
  const array1 = [1, 30, 39, 29, 10, 13];
  console.log(array1.every(isBelowThreshold));   // true
  }
  
  //.some() =================================================================================================================   SOME 
  // проверяет, соотв. хотя бы один элемент массива функции-условию в скобках. возвращает boolean
  // some(callbackFn)  some(callbackFn, thisArg)
  {
  const array = [1, 2, 3, 4, 5];
  const even = (element) => element % 2 === 0;  // Checks whether an element is even
  console.log(array.some(even));  //  true  
  }
  
  //.sort() =================================================================================================================   SORT 
  // по умолчанию сортирует элементы массива в восходящем порядке в соотв. с табл. символов.
  // изменяет начальный массив
  // sort()   sort(compareFn)
  {
  const months = ['March', 'Jan', 'Feb', 'Dec'];
  months.sort(Number);
  console.log(months);    // ["Dec", "Feb", "Jan", "March"]
     
  const array = [1, 30, 4, 21, 100000];
  array.sort();
  console.log(array);   // [1, 100000, 21, 30, 4]   
  }
  
  //.forEach() ==============================================================================================================  FOREACH 
  // выполняет указанную в скобках функцию один раз для каждого элемента массива
  // forEach(callbackFn)   forEach(callbackFn, thisArg)
  {
  const array = ['a', 'b', 'c'];
  array.forEach(element => console.log(element));    // a  b  c
  }
  
  //.slice() ===============================================================================================================   SLICE
  // возвращает в новый массив кол-во элементов указанных от начального индекса до конечного индекса(не включая)
  // не изменяет начальный массив
  // slice()   slice(start)  slice(start, end)
  {
  const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  console.log(animals.slice(2));  //  ["camel", "duck", "elephant"]
  console.log(animals.slice(2, 4));  // ["camel", "duck"]
  console.log(animals.slice(1, 5));  // ["bison", "camel", "duck", "elephant"]
  console.log(animals.slice(-2));  // ["duck", "elephant"]    считает с конца но возвращает слева направо
  }
  
  //.splice() ===============================================================================================================   SPLICE
  // удаляет или замещает элемент массива на указанный и/или добавляя новый элемент
  // изменяет начальный массив
  // splice(start)  splice(start, deleteCount)  splice(start, deleteCount, itemN)  
  {
  const months = ['Jan', 'March', 'April', 'June'];
  months.splice(1, 0, 'Feb');   // Inserts at index 1, deleting 0 elements
  console.log(months);   // ["Jan", "Feb", "March", "April", "June"]  -- массив мутировал
     
  months.splice(4, 1, 'May');  // Replaces 1 element at index 4
  console.log(months);    // ["Jan", "Feb", "March", "April", "May"]   
  }
  
  //.map() ==================================================================================================================   MAP
  // создает новый массив из элементов-результатов выполнения функции в скобках
  // map(callbackFn)   map(callbackFn, thisArg)
  {
  const array = [1, 4, 9, 16];     
  const map = array.map(x => x * 2); // Pass a function to map
  console.log(map);    // [2, 8, 18, 32]   
  }
  
  // delete =============================================================================================================== DELETE
  // удаляет элемент массива
  let fruits = ["Banana", "Orange", "Apple", "Mango"];
  delete fruits[1];
  console.log(typeof fruits[1])   // undefined
  console.log(fruits);  // [ 'Banana', <1 empty item>, 'Apple', 'Mango' ]
  
  
  //.reduce() ============================================================================================================ REDUCE
  // выполняет полученную callback func для каждого элемента массива, передавая вычисленное
  // от предыдущего элемента значение. Конечный результат - одно значение. Если нет начального значения,
  // метод использует эл. с индексом 0 в качестве начального значения.
  // reduce(callbackFn)     reduce(callbackFn, initialValue)
  
  {
  const array1 = [1, 2, 3, 4];
  // 0 + 1 + 2 + 3 + 4
  const initialValue = 0;
  const sumWithInitial = array1.reduce(
     (accumulator, currentValue) => accumulator + currentValue,
     initialValue
  );
  console.log(sumWithInitial); //  10
  }