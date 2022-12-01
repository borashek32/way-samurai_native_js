const todolistId1 = 'qewr-1234-qw-1'; // v1
const todolistId2 = 'qewr-1234-qw-2'; // v1

const todolists = [
  {
    id: todolistId1,
    title: 'What to learn',
    filter: 'all'
  },
  {
    id: todolistId2,
    title: 'What to buy',
    filter: 'all'
  }
];

const getObjKey = () => "username";

const tasks = {
  [todolistId1]: [ // 'qewr-1234-qw-1' вычисляемые свойства объекта создаются при помощи []
    {name: 'html', isDone: true},
    {name: 'css', isDone: false}
  ],
  [todolistId2]: [ // 'qewr-1234-qw-2' вычисляемые свойства объекта создаются при помощи []
    {name: 'beer', isDone: false},
    {name: 'fish', isDone: true}
  ],
  [10+20]: [], // "30"
  [getObjKey()]: [], // "username"
  ['user name']: [],
  "user": []
};

// console.log(tasks[todolists[0].id]);
// console.log(tasks);
// console.log(tasks['user']);
// console.log(tasks[todolistId1].map(el => el));


// reduce()
// const numbers = [1,2,3,4,5,6];
// console.log(numbers.reduce((acc, el) => {
//   return acc + el;
// }, 0));
// 0, 1 => 1
// 1, 2 => 3
// 3, 3 => 6
// 6, 4 => 10
// 10, 5 => 15
// 15, 6 => 21
// => 21
// console.log(numbers.reduce((acc, el) => acc > el ? acc : el));

let students = [
  {
    id: 1,
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85
  },
  {
    id: 2,
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89
  },
  {
    id: 3,
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    id: 4,
    name: "John",
    age: 26,
    isMarried: false,
    scores: 100
  }
];
let studentsNew = [
  {
    id: 1,
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85
  },
  {
    id: 2,
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89
  },
  {
    id: 3,
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    id: 4,
    name: "John",
    age: 26,
    isMarried: false,
    scores: 100
  }
];

// console.log(students.reduce((acc, el) => acc + el.scores, 0));
//
// console.log(students.reduce((acc, el) => {
//   if (el.scores >= 100) {
//     acc.push(el.scores);
//   }
//   return acc;
// }, []));

// console.log(students.reduce((acc, el) => {
//   const copySt = {...el};
//   copySt.scores = copySt.scores + 10;
//   acc.push(copySt);
//   return acc;
// }, []));
//
// console.log(students.reduce((acc, el) => {
//   if (el.name === "Nick") {
//     const copyNick = {...el, isMarried: true};
//     acc.push(copyNick);
//     return acc;
//   } else {
//     acc.push(el);
//     return acc;
//   }
// }, []));

const stObjects = {
  "1": {
    id: 1,
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85
  },
  "2": {
    id: 2,
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89
  },
  "3": {
    id: 3,
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },
  "4": {
    id: 4,
    name: "John",
    age: 26,
    isMarried: false,
    scores: 100
  }
};

console.log(students.reduce((acc, el) => {
  acc[el.id] = {...el};
  delete acc[el.id].id;
  return acc;
}, {}));
// console.log(students);

// self made reduce полифил
const selfMadeReduce = (array, func, startAccValue) => {
  let acc = startAccValue;
  for (let i = 0; i < array.length; i++) {
    acc = func(acc, array[i]);
  }
  return acc;
};

console.log('selfMadeReduce:');
// console.log(selfMadeReduce(numbers, (acc, el) => acc + el, 0));

console.log(selfMadeReduce(students, (acc, el) => {
  acc[el.id] = {...el};
  delete acc[el.id].id;
  return acc;
}, {}));
// console.log(students);

















