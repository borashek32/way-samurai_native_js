//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель,
// а возвращает сторку, состоящую из указанного количества повторов подстроки
// с использованием разделителя.

// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"

function repeatString (someString, repeatQuantity, divider) {
  const newString = someString + divider;
  return newString.repeat(repeatQuantity).slice(0, -1);
}
console.log(1, repeatString("yo", 3, " "));
console.log(1, repeatString("yo", 3, ","));


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку,
// а возвращает true, если строка начинается с указанной подстроки,
// в противном случае - false. Регистр не учитывается.

// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

const checkStart = (str, subStr) => {
  return !(str.toLowerCase().indexOf(subStr.toLowerCase()));
};
console.log(2, checkStart("Incubator", "inc"));
console.log(2, checkStart("Incubator", "yo"));

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов),
// а возвращает строку из параметров, обрезанную до указанного количества символов
// и завершает её многоточием.

//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, num) => {
  return str.slice(0, num).concat('...');
};
console.log(3, truncateString("Всем студентам инкубатора желаю удачи!", 10));

//4. Реализуйте функцию, которая принимает параметром сторку (предложение)
// и возвращает самое короткое слово в предложении, если в параметрах
// пустая строка или не строка, то возвращает null.

// getMinLengthWord("Всем студентам инкубатора желаю удачи") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null

function getMinLengthWord(str) {
  const words = str.split(' ');
  let shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord;
  }, words[0]);
  return shortest;
}
console.log(4, getMinLengthWord("Всем студентам инкубатора желаю удачи"));

//5. Реализуйте функцию, которая принимает параметром сторку (предложение)
// и возвращает то же предложение, где все слова написаны строчными,
// но начинаются с заглавных букв.

// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"

function setUpperCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g,
    function(a) {
    return a.toUpperCase();
  });
}
console.log(5, setUpperCase("всем стУдентам инкуБатора Желаю удачИ"));


// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку.
// Если все символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false

const isIncludes = (str, subst) => {
  return subst.split("").every((item, i) =>
    str.toLowerCase().includes(item.toLowerCase()));
};

console.log(6, isIncludes("Incubator", "Cut"));           // true
console.log(6, isIncludes("Incubator", "table"));         // false
console.log(6, isIncludes("Incubator", "inbba"));         // true
console.log(6, isIncludes("Incubator", "inba"));          // true
console.log(6, isIncludes("Incubator", "Incubatorrr"));   // true





let str = 'abracadabra';
const res = str.split('').filter(letter => ['a','e','i','o','u','y'].includes(letter.toLowerCase())).join('');
console.log(res.length);

function squareSum(numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let sq = Math.pow(numbers[i], 2);
    sum += sq;
  }
  return sum;
}

console.log(squareSum([1,2]));

function oddOrEven(array) {
  let sum = 0;
  for (let i; i < array.length; i++) {
    sum += array[i];
  }
  if (sum % 2 === 0) return "even"
  if (sum % 2 !== 0 || sum ===0) return "odd"
}
console.log(oddOrEven([1,2,3]))

function descendingOrder(n){
  arr = n.toString().split('', n.length)
  let descendingArr = arr
    .reverse(((a, b) => a - b))
    .join('')
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      [...arr, arr[i]]
    }
  }

  return Number(descendingArr)
}
console.log(descendingOrder(9876543210));

function dontGiveMeFive(start, end)
{
  for (let i = 1; i <= end; i++) {
    if (start != 5 || start + 1 != 5) {
      start += 1
      if (start === end) {
        return i
      }
    }
  }
}
function dontGiveMeFive(start, end) {
  let count = 0
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++
    }
  }
  return count
}
console.log(dontGiveMeFive(4,17));