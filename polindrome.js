// Alex
  function isPallindrom (phrase) {
    phrase = phrase.toLowerCase().replace(/\W/g,'');
    return phrase === phrase.split('').reverse().join(''); 

}
console.log(isPallindrom ("A man, a plan, a canal: Panama"));

//С проверкой на пустую строку
function isPalindrome2(phrase) {
  let cleanedPhrase = phrase.replace(/[^a-z0-9]/gi, '').toLowerCase();
  if (cleanedPhrase.length === 0) {
    return false;
  }
  return cleanedPhrase === cleanedPhrase.split('').reverse().join('');
}
console.log(isPalindrome2("A man, a plan, a canal: Panama"));

/* В данном случае мы используем \p{L} для сопоставления с любыми буквенными символами
(включая кириллические), и \p{N} для сопоставления с любыми цифрами. 
Опция u в конце регулярного выражения указывает на использование юникодных символов.
*/

function isPalindrome(phrase) {
  let cleanedPhrase = phrase.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();
  if (cleanedPhrase.length === 0) {
    return false;
  }
  return cleanedPhrase === cleanedPhrase.split('').reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
