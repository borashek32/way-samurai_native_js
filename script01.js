// String, Number, null, undefined, Boolean, Object, Nan,
// Infinity, Bigint, Symbol - are used very rarely, mb at interviews
// object: Object, Array, function

let num1 = 5;
let num2 = num1;
num2 = 7;

// it is not an object, it's just a command to create an object
// will be created just in a browser and will be put into memory
// the variable will have a link to the created object
const user1 = {
  name: "Bob",
  age: 23
};
let user2 = user1;
user2.name = "Alex";
user2.isStudent = true;
console.log(user1.name, user2.name, user2.isStudent);

console.log(typeof "wfdtdfewtqdwf");
console.log(typeof (() => {}));
console.log(Array.isArray([]));
console.log(Array.isArray({}));
console.log(typeof Infinity);
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(123));

// объект => создаем копию => вносим изменения в копию => используем копию

// to copy an object
// a copy of an object is another object with the same properties
const copyUser = {...user1};
// the same like a spread operator
// copyUser.name = user1.name;
// copyUser.age = user1.age;
console.log(copyUser === user1);
console.log(copyUser); // false

const array = [1,2,3,4,5];
const array2 = [5,6,8,9,5];
array.push(6); // this method mutate the original array !! не делать так, потому что поменяется исходный масссив
// тоже самое, как сверху, Делаем копию ..., а потом в копию пушим 6
console.log([...array, 6]); // для добавления в конец
console.log([0, ...array]); // для добавления в начало
console.log("qwer", ...array, 4, ...array2); // можно объединить несколько массивов и других типов данных в одном
                                              // массиве
// или длиннее
const array1 = [...array]; // делаем копию
array1.push(6); // добавляем 6
console.log(array, array1);

const copyUser1 = {...user1, name: "Bob", isStudent: false};
console.log(copyUser1);

const student = {
  name: "Bob",
  age: 23,
  friends: ['Nat', 'Polina', 'Igor']
};
// поверхностное копирование, без учета вложенности
const copyStudent = {...student, name: "Alex"};
copyStudent.friends.push("Lera");
console.log(student);
// глубокое копирование, из-за того, что на 63 строке пушится Лера, она будет, хотя ее там не должно быть, так как ее
// нет в исходном массиве. Просто нужно закомментировать 62-64 строчки
const deepCopyStudent = {...student, friends: [...student.friends, "Lera"]};
console.log(student);

// иммутабельность - это изменения, которые были произведены над копией объекта


let a = "3";
let b = 3;
console.log(a==b);
console.log(a===b);