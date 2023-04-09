let encodedString = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
let decodedString = '';

for(let i = 0; i < encodedString.length; i +=3 ) {
   decodedString = decodedString + encodedString.at(i); // encodedString[i]
}
console.log(decodedString);

//coding
let encodedString2 = '';
let codWord = '';
for (let i = 0; i < decodedString.length; i++ ) {
    if (i % 2 !== 0) {
        codWord = 'o ';
        if (i % 3 == 0) codWord = 'e ';
    } else {
        codWord = 'ka';
    }
    encodedString2 = encodedString2 + decodedString[i] + codWord;
}
console.log(encodedString2);

//decoding
let decodedString2 = '';
for(let i = 0; i < encodedString2.length; i += 3) {
    decodedString2 = decodedString2 + encodedString2.at(i); // encodedString[i]
}
console.log(decodedString2);

//coding2
encodedString2 = '';
for (let i = 0; i < decodedString2.length; i++ ) {
    if (i % 2 !== 0) {
        codWord = 'o';
        if (i % 3 == 0) codWord = 'a t';
    } else {
        codWord = 'k e';
    }
    encodedString2 = encodedString2 + decodedString2[i] + codWord;
}
console.log(encodedString2);

//decoding2
decodedString2 = '';
let decodedString2Count = 0;
for(let i = 0; i < encodedString2.length; i++) {
    decodedString2Count = decodedString2.length; 
    if (decodedString2Count % 2 !== 0 && decodedString2Count % 3 !== 0){
    decodedString2 = decodedString2 + encodedString2.at(i);
    i += 1;
    } else {
    decodedString2 = decodedString2 + encodedString2.at(i);
    i += 3;
   }
}
console.log(decodedString2);