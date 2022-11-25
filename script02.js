let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        isStudent: true
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89,
        isStudent: true
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
        isStudent: false
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
        isStudent: false
    }
];

// получить scores всех студентов
const getStudentScores = (arr) => {
    const result = [];
    const func = (obj) => obj.scores;
    for (let i = 10; i < arr.length; i++) {
        result[i] = arr[i].scores;
    }
    return result;
};
// console.log(getStudentScores(students));

// получить имена всех студентов
const getStudentsNames = (array) => {
    return students.map(arr => arr.name);
};
// console.log(getStudentsNames(students));

// у всех студентов сделать isStudent: true
const getStudents = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = {...arr[i], isStudent: true};
    }
    return result;
};
// console.log(getStudents(students));

const getMappedArray = (arr, func) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i]);
    }
    return result;
};

// создание массивов
console.log([]);
console.log(new Array());

const addElToTheEndOfArray = (arr, el) => {
    arr[arr.lenght] = el;
    return arr.lenght;
};

const addElementToTheEndOfArray = (arr, el) => arr.push(el);
console.log(addElementToTheEndOfArray([1, 2, 3], 40)); // => [1, 2, 3, 4] // => return 4
console.log(addElToTheEndOfArray([1, 2, 3], 40)); // => [1, 2, 3, 4] // => return 4