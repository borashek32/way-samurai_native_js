// __proto__
// protptype

class Car {
  constructor(brand) {
    this.brand = brand
  }

  // такая ф будет лежать в прототипе
  // таким образом к памяти не создается много одинаковых функций
  // при написании классов лучше использовать такие ф
  startEngine() {
    console.log(`start ${this.brand}`);
  }
  // такая ф будет лежать у каждлшл объекта, отнаследованного от этого класса
  // в функциональных компонентах лучше стрелочные ф
  stopEngine = () => {
    console.log(`stop ${this.brand}`);
  }
}

const car1 = new Car("audi")
const car2 = new Car("bmw")

console.log(car1 === car2) // false
console.log(car1.brand === car2.bard) // false
console.log(car1.startEngine === car2.startEngine); // true, потому что ф создана при помощи function declaration
console.log(car1.stopEngine === car2.stopEngine); // false

// __proto__ есть у объектов, созданных из классов
// prototype усть у классов и функций конструкторов
// смотреть в консоли браузера

// Function.__proto__ === Function.prototype


// функция конструктор
// class Car(brand) {
//   this.brand = brand
// }
// Car.prototype.start = function() {}

console.log({}.prototype === {}.prototype);

// __proto__ у этих функций ссылаются на один и тот же объект
function foo() {}
const bar = () => {}
console.log(foo.__proto__ === bar.__proto__);


class newArray {
  constructor(arr) {
    this.arr = arr
  }
  newMap(callback) {
    let newArr = []
    for (let i = 0; i < this.arr.length; i++) {
      newArr.push(callback(this.arr[i]))
    }
    return newArr
  }
}
const arr3 = new newArray([1, 3, 4])
console.log(arr3.newMap((el) => el * 2))


function newArraw(arr) {
  // {}
  this.arr = arr
}
newArraw.prototype.map = function(callback) {
  let newArr = []
    for (let i = 0; i < this.arr.length; i++) {
      newArr.push(callback(this.arr[i]))
    }
    return newArr
}
const arr4 = [8, 9, 20]
console.log(arr4.map((el) => el * 2));