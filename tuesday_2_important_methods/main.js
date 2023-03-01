const students = [
  {
    id: 1,
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
    // friends: ["Alex", "Nick", "John", "Helen", "Ann"]
  },
  {
    id: 2,
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 90,
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
    age: 19,
    isMarried: false,
    scores: 100
  },
  {
    id: 5,
    name: "Helen",
    age: 20,
    isMarried: false,
    scores: 110
  },
  {
    id: 6,
    name: "Ann",
    age: 20,
    isMarried: false,
    scores: 105
  },
];

const user = {
  name: "Bob",
  age: 23,
  friends: ["Alex", "Nick", "John"]
};

const superUser = {
  name: "Bob",
  age: 23,
  friends: [
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
      scores: 90,
    },
    {
      id: 4,
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    }
  ]
};


//1. Создайте поверхностную копию объекта user
let copyUser = {...user};
//Проверка:
console.log("surface copy user === copyUser => false", user === copyUser);
console.log("user.friends === copyUser.friends => true", user.friends === copyUser.friends);

//2. Полная (глубокая) копия объекта user
// let deepCopyUserFriends = JSON.parse(JSON.stringify(user.friends));
let deepCopyUserFriends = {...user, friends: [...user.friends]};
// превращаем литерал объекта в строку - parse() и при помощи след метода делаем обратно строку stringify()
// не все структуры данных можно скопировать таким способом (например, NaN, undefined)
// применительно к нагим урокам так лучше не писать, знать надо, но не всегда нужно
let deepCopyUser = JSON.parse(JSON.stringify({...user, friends: deepCopyUserFriends}));
//Проверка:
console.log("deep copy user friends", user[1] === deepCopyUser[1]);
// friends ссылаются на один объект
console.log("user.friends === deepCopyUser.friends => true", user.friends === deepCopyUser.friends);
copyUser.friends.push("Polina");
console.log(user);

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
console.log("copyStudents !== students => true", copyStudents !== students);
console.log("copyStudents[1].name === students[1].name => true", copyStudents[1].name === students[1].name);
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
// let deepCopyStudents = students.slice(0);
// let deepCopyStudents = JSON.parse(JSON.stringify(students));
let deepCopyStudents = students.map((s) => {
  return {...s};
});

//Проверка:
console.log("students === deepCopyStudents => true", deepCopyStudents === students);
console.log("copyStudents[1] === students[1] => true", deepCopyStudents[1] === students[1]);
console.log("copyStudents[1].name === students[1].name => true", deepCopyStudents[1].name === students[1].name);
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = [...deepCopyStudents].sort(byField('name'));
function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

console.log("deep copy students", [...deepCopyStudents]);
console.log("sorted by name", sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости (лучший идёт первым)(sort)
// let sortedByScores = deepCopyStudents.sort(byField('scores')).reverse();
// выводится всего три элемента, потому что дальше массив был уменьшен до 3 элементов
// выводится уже обрезанный массив
let sortedByScores = deepCopyStudents.sort((a, b) => {
  return b.scores - a.scores;
});
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = students.filter(s => s.scores >= 100);
console.log(bestStudents);

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
let topStudents = deepCopyStudents.splice(0, 3, bestStudents.length - 3);
console.log("3 best students", topStudents);
console.log("deep copy students", deepCopyStudents);

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
// старый вариант
// let newDeepCopyStudents = [...topStudents].concat([...deepCopyStudents]);
let newDeepCopyStudents = [...topStudents,...deepCopyStudents];
console.log("concat top students and deep copy", newDeepCopyStudents);


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(s => !s.isMarried);
console.log("not married", notMarriedStudents);

//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(s => s.name);
console.log("students names", studentsNames);

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(' ');
console.log("space names", namesWithSpace);
let namesWithComma = studentsNames.join(', ');
console.log("comma names", namesWithComma);

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(s => ({...s, isStudent: true}));
console.log("trueStudents", trueStudents);

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(s => s.name === "Nick" ? {...s, isMarried: true} : s);
console.log("students with married Nick", studentsWithMarriedNick);

//11. Найдите студента по имени Ann (find)
let ann = students.find(s => s.name === "Ann");
console.log("Ann", ann);

// И поднимаем руку!!!!

// //12. Найдите студента с самым высоким баллом (reduce)
// // - c помощью reduce
// // - *не испльзуя методы массивов и Math.max()*
// let bestStudent;
// console.log(bestStudent)
//
// //13. Найдите сумму баллов всех студентов (reduce)
// let scoresSum;
// console.log(scoresSum)
//
//
//
// // 14. Д.З.:
// // Напишите функцию addFriends, которая принимает параметром массив students
// // и добавляет в каждому студенту свойство "friends",
// // значением которого является массив имён всех остальных студентов из массива students,
// // за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
// const addFriends = (students) => {
//    //..............................
// }
// console.log(addFriends(students));
//
// // 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// // массив
// // students  и количество лучших студентов, которое надо получить в
// // новом массиве.
// // getBestStudents(students) => [{name: "Nick", age: 20, isMarried: false, scores: 120}]
// // getBestStudents(students, 3)
// // getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]








