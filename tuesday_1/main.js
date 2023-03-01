// SORT

const strings = ["ALex", "Donald", "Bob"];
const ns = [4,3,7,1];

// сортировка по алфавиту
// сортирует в порядке расположения символов Unicode,
// то есть не совсем по алфавиту
// у нас есть цифры, много алфавитов, заглавные и строчные буквы
console.log(strings.sort());
console.log(ns.sort());

// вот пример расположения
const strings1 = ["ALex", "Donald", "Bob", 1]; // [ 1, 'ALex', 'Bob', 'Donald' ]
console.log(strings1.sort());

const strings2 = ["ALex", "alex", "Donald", "Bob", 1];
console.log(strings2.sort());

// метод sort работает деструктивно, то есть не создает новый массив

const numbers = [1000, 458, 300, 1500]; // [ 1000, 1500, 300, 458 ]

// сортирует по первой цифре и тд
console.log(numbers.sort());

// для нормальной сортировке чисел нужно передать функцию сравнения (callback)
const compareFunction = (a, b) => {
  if (a > b) {
    return 10; // если проверка верна, то возвращаем любое положительное число, вместо true
  } else {
    return -10; // если проверка НЕверна, то нужно вернуть любое отрицательное число, вместо false
  }
};
const compareFunc = (a, b) => a - b;
const numbers1 = [1000, 458, 300, 1500];
console.log(numbers1.sort(compareFunc));

// REVERSE
const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 95
  },
  {
    name: "Alex",
    age: 24,
    isMarried: true,
    scores: 89
  },
  {
    name: "Helga",
    age: 24,
    isMarried: true,
    scores: 90
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 121
  },
  {
    name: "alex",
    age: 22,
    isMarried: true,
    scores: 89
  },
];

// по возрасту
console.log(students.sort((a, b) => a.age - b.age));

// по алфавиту, регистрозависимая сортировка
console.log(students.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else {
    return -1;
  }
}));

// регистронезависимая сортировка
console.log(students.sort((a, b) => a.name.localeCompare(b.name)));

// вложенная сортировка (по возрасту и потом по успеваемости)
console.log(students.sort((a, b) => {
  if (a.age < b.age) {
    return -1;
  } else if (a.age > b.age) {
    return 1;
  } else {
    if (a.scores >= b. scores) {
      return -1;
    } else {
      return 1;
    }
  }
}));

console.log(students.sort((a, b) => {
  switch(a, b) {
    case (a.age < b.age):
      return -1;
    case (a.age > b.age):
      return 1;
    case (a.scores >= b.scores):
      return -1;
    default:
      return 1;
  }
}));

// bubble sort
const nums = [23, 56, 34, 1, 67, 12, 3];
// по возрастанию
for (let j = 0; j < nums.length - 1; j++) {
  let isSorted = true;
  for (let i = 0; i < nums.length - 1 - j; i++) {
    if (nums[i] > nums[i + 1]) { // если элементы стоят в неверном порядке
      isSorted = false;
      // меняем местами элементы в массиве
      // const temp = nums[i];
      // nums[i] = nums[i + 1];
      // nums[i + 1] = temp;
      // тоже самое только короче - деструктуризация
      // если следующая строка начинается с [,
      // то обязательно ставить в конце предыдущей строки ;
      [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]];
    }
  }
  if (isSorted) {
    break;
  }
}
// сложность алгоритма падает при уменьшении итераций nums.length - 1 - j
console.log(nums);

(() => {alert(123);})();
const a = 12;