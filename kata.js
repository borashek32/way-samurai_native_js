console.log("kata");

// 01.03.23

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

let str;
str = "This is an example!";
const str2 = "double  spaces";
const someString = "Hello World!";

function reverseWordsMap(someStr) {
  return someStr.split(' ').map(function (word) {
    return word.split('').reverse().join('');
  }).join(' ');
}

console.log(reverseWordsMap(someString));

// function reverseWords(str) {
//   const strArr = str.split(' ');
//   let arrReverse = [];
//   let totalStrReverse;
//   for (let i = 0; i < strArr.length; i++) {
//     let strReverse = Array.from(strArr[i]).reverse().toString().replaceAll(',', '');
//     arrReverse.push(strReverse);
//   }
//   totalStrReverse = arrReverse.toString().replaceAll(",", " ");
//   return totalStrReverse;
// }
//
// reverseWords(str);
// reverseWords(str2);

// best solution
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

console.log(reverseWords(str));