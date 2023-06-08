//==========================================  STRING   METHODS  =========================================

/ https:/ / developer.mozilla.org / en -
  US / docs / Web / JavaScript / Reference / Global_Objects / String;

// .split()  =================================================================================  SPLIT
// делит строку по указанному разделителю, возвращает массив
// начальную строку не меняет
// split(separator)    split(separator, limit)
{
  let string = "Hello World: QA JS !";
  console.log(string);

  console.log(string.split("")); //['H', 'e', 'l', 'l', 'o',' ', 'W', 'o', 'r', 'l','d', ':', ' ', 'Q', 'A',' ', 'J', 'S', ' ', '!']
  console.log(string); // Hello World: QA JS !    -- вернул начальный вариант строки, т.е. метод строку не меняет

  console.log(string.split(":")); // [ 'Hello World', ' QA JS !' ]  -- массив строк  - до и после знака ":"

  console.log(string.split("")); //['H', 'e', 'l', 'l', 'o',' ', 'W', 'o', 'r', 'l','d', ':', ' ', 'Q', 'A',' ', 'J', 'S', ' ', '!']
}

// .length  =====================================================================================  LENGTH

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt.length); // 26

// .slice() ======================================================================================   SLICE
// вырезает часть строки, начиная с указ. индекса и возвращает ее как новую строку,
//не меняя начальную строку
//slice(indexStart)
//slice(indexStart(included), indexEnd(not included))
{
  let str = "Apple, .Banana, Kiwi";
  let part = str.slice(7, 9);
  console.log(part); // .B   -- исключая 9 индекс!!
  part = str.slice(-3); //  -- считает с конца строки
  console.log(part); // iwi
}

// .replace()  ====================================================================================  REPLACE
// заменяет указанную часть строки. только первое вхождение.                                         REPLACEALL
// метод не изменяет начальную строку
//.replaseAll()
// заменяет укзанную часть строки во всех местах в строке, где она встречается.
// replace(pattern, replacement)
{
  let message = "Please 5 visit 5 Microsoft!";
  console.log(message.replace("Microsoft", "Apple")); // Please 5 visit 5 Apple!
  console.log(message); // Please 5 visit 5 Microsoft!
  let newText = message.replace(/microsoft/i, "Apple"); // Please 5 visit 5 Apple!
  console.log(newText);
  console.log(newText.replaceAll("5", "")); // Please visit Apple!
}

// .charAt()  =======================================================================================  CHARAT
// возвращает элемент строки, соответствующий указанному в скобках индексу
// charAt(index)
{
  let text = "HELLO WORLD";
  let letter = text.charAt(6);
  console.log(letter, text[6]); // W W
}

// .charCodeAt()  ===================================================================================  CHARCODEAT
// возвращает числовое значение кода UTF-16 между 0 и 65535 для символа по указанному индексу
// charCodeAt(index)
// index >= 0 и < длины строки; если index не является числом, он устанавливается в 0
{
  console.log("ABC".charCodeAt(0)); // 65

  const sentence = "The quick brown fox jumps over the lazy dog.";
  const index = 4;
  console.log(
    "The character code " +
      sentence.charCodeAt(index) +
      " is equal to " +
      sentence.charAt(index)
  );
  // The character code 113 is equal to q
}

// String.fromCharCode()  ===========================================================================  STRINGFROMCHARCODE
// возвращает строку, созданную из указанной последовательности значений единиц кода UTF-16.
// статический метод String, всегда используется такая запись (метод вызывается от объекта String):
// String.fromCharCode(num1)  String.fromCharCode(num1, num2) String.fromCharCode(num1, num2, /* …, */ numN)
{
  console.log(String.fromCharCode(189, 43, 190, 61)); // ½+¾=
  console.log(String.fromCharCode(65, 66, 67)); //  ABC
}

// .repeat()  ========================================================================================  REPEAT
// повторяет значение, от которого вызывается, указанное число раз
// repeat(count)
{
  let q = "Helo!";
  console.log(q.slice(1, 3).repeat(4)); // elelelel

  //Create copies of a text:
  let text = "Hello world!";
  let result = text.repeat(2);
  console.log(result); // Hello world!Hello world!
}

// .trim() ============================================================================================== TRIM
// удаляет пробелы с обоих концов строки и возвращает новую строку без изменения начальной
// .trimEnd() удаляет пробелы с конца   .trimStart() удаляет пробелы с начала
{
  let text = "   Hello World   !";
  let result = text.trim();
  console.log(result); // Hello World   !
}

// .at() =================================================================================================  AT
// возвращает символ строки, индекс которого указан в скобках
// at(index)   работает с 16 версии node.js
{
  const sentence = "The quick brown fox jumps over the lazy dog.";
  let index = 5;
  console.log(
    `Using an index of ${index} the character returned is ${sentence.at(index)}`
  );
  // "Using an index of 5 the character returned is u"
  index = -4;
  console.log(
    `Using an index of ${index} the character returned is ${sentence.at(index)}`
  );
  //"Using an index of -4 the character returned is d"
}

// .concat() ============================================================================================= CONCAT
// складывает строки. возвращает новую строку.
// concat(str1)  concat(str1, str2)
{
  const str1 = "Hello";
  const str2 = "World";
  console.log(str1.concat(" ", str2)); // "Hello World"
  console.log(str2.concat(", ", str1)); // "World, Hello"
}

// .padEnd() ============================================================================================= PADEND
// дополняет строку новой строкой(если нужно - повтором) с конца до указанной длины                        PADSTART
// padEnd(targetLength)   padEnd(targetLength, padString)
// .padStart() - то же самое, но с начала строки
{
  const str1 = "Breaded Mushrooms";
  console.log(str1.padEnd(25, ".")); // "Breaded Mushrooms........"
  const str2 = "200";
  console.log(str2.padEnd(5)); //  "200  "
}
{
  const str1 = "5";
  console.log(str1.padStart(2, "0")); //  "05"
  const fullNumber = "2034399002125581";
  const last4Digits = fullNumber.slice(-4);
  const maskedNumber = last4Digits.padStart(fullNumber.length, "*");
  console.log(maskedNumber); // "************5581"
}

// .substring() ========================================================================================= SUBSTRING
// возвращает часть строки начиная с указ.индекса и заканч.указ.индексом(искл. его)
// если конечный индекс не указан, возвращ. всё до конца строки.
// substring(indexStart)   substring(indexStart, indexEnd)
{
  const str = "Mozilla";
  console.log(str.substring(1, 3)); // "oz"
  console.log(str.substring(2)); // "zilla"
}

// .toLowerCase() приведение всей строки к нижнему регистру =========================================== TOLOWERCASE
// .toUpperCase() приведение всей строки к верхнему регистру                                            TOUPPERCASE
