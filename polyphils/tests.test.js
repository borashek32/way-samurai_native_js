const usualMap = require('./script');
const selfMadeMap = require('./script');

const usualFilter = require("./script");
const selfMadeFilter = require("./script");
const {beforeEach} = require("@jest/globals");

const addSkills = require("./script");

beforeEach(() => {
  ppl = [
    {id: 1, name: "Igor", skills: ["playing", "eating", "drinking", "reading"]},
    {id: 2, name: "Polina", skills: ["playing", "eating", "drinking", "reading", "writting"]},
    {id: 3, name: "Vadim", skills: ["playing", "eating", "drinking", "reading", "driving"]},
    {id: 4, name: "Nataly", skills: ["playing", "eating", "drinking", "reading", "programming"]},
  ];
});

// FILTER
test('usualFilter', () => {
  expect(usualFilter([
    {id: 1, title: 'math'},
    {id: 2, title: 'biology'}
  ], "math")).toEqual([
    {id: 1, title: 'math'}
  ]);
});
test('selfMadeFilter', () => {
  expect(selfMadeFilter([
    {id: 1, title: 'math'},
    {id: 2, title: 'biology'}
  ], "math")).toEqual([
    {id: 1, title: 'math'}
  ]);
});

// MAP
test('usualMap', () => {
  expect(usualMap(
    ['math', 'biology']
  )).toBe([
    'MATH',
    'BIOLOGY'
  ]);
});
test('selfMadeMap', () => {
  expect(selfMadeMap([
    {id: 1, title: 'math'},
    {id: 2, title: 'biology'}
  ])).toBe([
    'MATH',
    'BIOLOGY'
  ]);
});

// ADD SKILLS MAP
test('addSkills', () => {
  let girls = [
    {id: 1, name: "nat", skills: ["sitting"]},
    {id: 2, name: "kate", skills: ["cooking"]}
  ];
  addSkills(girls, "knitting");
  expect(girls[0].skills[1]).toBe("knitting");
});