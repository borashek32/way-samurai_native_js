console.log("kata");

// 01.03.23

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// let str;
// str = "This is an example!";
// const str2 = "double  spaces";
// const someString = "Hello World!";
//
// function reverseWordsMap(someStr) {
//   return someStr.split(' ').map(function (word) {
//     return word.split('').reverse().join('');
//   }).join(' ');
// }
//
// console.log(reverseWordsMap(someString));

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
// function reverseWords(str) {
//   return str.split(' ').map(function(word){
//     return word.split('').reverse().join('');
//   }).join(' ');
// }
//
// console.log(reverseWords(str));


// 02.03.23
// In this little assignment you are given a string
// of space separated numbers, and have to return
// the highest and lowest number.

// function highAndLow(numbers) {
//   let numbers1 = numbers.split(' ');
//   numbers1.sort((a, b) => b - a);
//   let newArr = [];
//   newArr.push(numbers1[0], numbers1[numbers1.length - 1]);
//   let newStr = newArr.toString(' ');
//   return newStr.replace(",", " ");
// }

// function highAndLow(numbers){
//   numbers = numbers.split(' ').map(Number);
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }
//
// console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"


// 03.03.23
// You might know some pretty large perfect squares. But what about the NEXT one?
//
//   Complete the findNextSquare method that finds the next integral
//   perfect square after the one passed as a parameter. Recall that
//   an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
//   If the parameter is itself not a perfect square then -1 should be
//   returned. You may assume the parameter is non-negative.
//
//   Examples:(Input --> Output)
//
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// function findNextSquare(sq) {
//   if (Number.isInteger(Math.sqrt(sq))) {
//     return Math.pow((Math.sqrt(sq) + 1), 2);
//   }
//   return -1;
// }

// function findNextSquare(sq) {
//   return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
// }

// console.log(findNextSquare(121));
// console.log(findNextSquare(625));
// console.log(findNextSquare(114));

// 04.03.23
// Your task is to create a function that does four basic mathematical operations.
//
//   The function should take three arguments - operation(string/char), value1(number), value2(number).
//   The function should return result of numbers after applying the chosen operation.
//
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case '+':
//       return value1 + value2;
//     case '-':
//       return value1 - value2;
//     case '*':
//       return value1 * value2;
//     case '/':
//       return value1 / value2;
//     default:
//       return 0;
//   }
// }

// console.log(basicOp('+', 4, 7));


// 05.03.23
// In this kata you will create a function that takes a list
// of non-negative integers and strings and returns a new list
// with the strings filtered out.
//
//   Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// function filterList(list) {
//   // Return a new array with the strings filtered out
//   let arrNum = [];
//   for (let i = 0; i < list.length; i++) {
//     if (typeof list[i] !== "string") {
//       arrNum.push(list[i]);
//     }
//   }
//   return arrNum;
// }

// best solution
// function filter_list(l) {
//   return l.filter(function(v) {return typeof v == 'number'});
// }
//
// console.log(filter_list([1,2,'a','b']));
// console.log(filter_list([1,'a','b',0,15]));
// console.log(filter_list([1,2,'aasf','1','123',123]));


// 06.03.23
// Make a function that will return a greeting statement
// that uses an input; your program should return,
// "Hello, <name> how are you doing today?".

// function greet(name){
//   return `Hello, ${name} how are you doing today?`;
// }

// console.log(greet('Nat'));


// 07.03.23
// Given an array of integers, return a new array with each value doubled.

// const arr = [1, 2, 3];
//
// function maps(x){
//   return x.map(x => x * 2)
// }
//
// console.log(maps(arr));


// <input id="moldova" value="it-incubator"/>

// <script>
  // const inputElement = document.querySelector('moldova');
  // inputElement.value = '';

  // {/*/* Что нужно написать вместо XXX, чтобы значение в поле ввода зачищалось?*/}
  // {/*В качестве ответа укажите строчку целиком.  */*/}
// </script>


// 08.03.23
// Given a non-negative integer, 3 for example, 
// return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  let arr = []
  for (let i = 1; i <= num; i++) {
    let str = `${i} sheep...`
    arr.push(str)
  }
  let arrStr = arr.join('')
  return arrStr
}
console.log(countSheep(2));
















