// import { v1 } from '/native_js/';

const lessons = [
  {id: 1, title: "math"},
  {id: 2, title: "biology"},
  {id: 3, title: "english"},
  {id: 4, title: "turkish"}
];
const students = [
  {id: 1, name: "Polina", skills: ["css", "less", "sass"]},
  {id: 2, name: "Polina", skills: ["css", "less", "sass", "html"]},
  {id: 3, name: "Polina", skills: ["css", "less", "sass", "html"]},
  {id: 4, name: "Polina", skills: ["css", "less", "sass", "php", "react"]},
  {id: 5, name: "Polina", skills: ["css", "less", "sass", "php", "react"]},
  {id: 6, name: "Polina", skills: ["css", "less", "sass", "vue", "angular"]},
];

// MAP
function usualMap(arr) {
  arr.map(el => el.title.toUpperCase());
}
// console.log(usualMap(lessons));

// ADD SKILLS MAP
const addSkills = (arr, newSkill) => {
  arr.map(st => st.skills.push(newSkill));
};
// console.log(addSkills(students, "laravel"));

function selfMadeMap(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i].title.toUpperCase();
    newArr.push(el);
  }
  return newArr;
}
// console.log(selfMadeMap(lessons));

// FILTER
function usualFilter(arr, str) {
  arr.filter(el => el.title === str);
}
const selfMadeFilter = (arr, str) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title === str) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

module.exports = selfMadeMap;
module.exports = usualMap;

module.exports = usualFilter;
module.exports = selfMadeFilter;

module.exports = addSkills;