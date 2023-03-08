// // reduce
// const euros = [29.76, 41.85, 46.5];
// // 1
// const sum = (euros) => {
//   return euros.reduce((total, amount) => total + amount);
// }; // 118.11
//
// console.log(sum(euros)); // 118.11
//
// // 2
// const average = euros.reduce((total, amount, index, array) => {
//   total += amount;
//   if( index === array.length-1) {
//     return total/array.length;
//   }else {
//     return total;
//   }
// }); // 39.37
//
// console.log(average);
//
// const average1 = (euros) => {
//   const total = euros.reduce((total, amount) => total + amount);
//   return total/euros.length;
// }; // 39.37
//
// console.log(average1([29.76, 41.85, 46.5]));
//
// // 3
// const average2 = euros.reduce((total , amount) => {
//   if (amount > 40) {
//     total.push(amount * 2);
//   }
//   return total;
// }, []);
//
// console.log(average2);
//
// // 4
// const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry',
//   'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
// const count = fruitBasket.reduce( (tally, fruit) => {
//   tally[fruit] = (tally[fruit] || 0) + 1 ;
//   return tally;
// } , {});
//
// console.log(count); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
//
// const count2 = fruitBasket.reduce((tally, fruit) => {
//   if (!tally[fruit]) {
//     tally[fruit] = 1;
//   } else {
//     tally[fruit] = tally[fruit] + 1;
//   }
//   return tally;
// }, {});
//
// console.log(count2);
//
// // 5
// const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const flat = data.reduce((total, amount) => {
//   return total.concat(amount);
// }, []);
//
// console.log(flat); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//
// const data1 = [
//   {a: 'happy', b: 'robin', c: ['blue','green']},
//   {a: 'tired', b: 'panther', c: ['green','black','orange','blue']},
//   {a: 'sad', b: 'goldfish', c: ['green','red']}
// ];
// const colors = data.reduce((total, amount) => {
//   amount.c.forEach( color => {
//     total.push(color);
//   });
//   return total;
// }, []);
//
// console.log(colors);
// // Цвета
// // ['blue','green','green','black','orange','blue','green','red']


// методы массивов
let arr = [];
arr[3] = "123";
console.log(arr.push(12)); // возвращает длину массива
console.log(arr);
console.log(arr.unshift(33)); // возвращвет длину массива
console.log(arr);
console.log(arr[1] = "i am the first element");
console.log(arr);











