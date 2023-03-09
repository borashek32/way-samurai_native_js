// // function-constructor
// function CarCreator(brand) {
//   this.brand = brand;
// }
// // this указывает на конкретный бренд у каждой машины
// const car1 = new CarCreator("BMW");
// const car2 = new CarCreator("Opel");

// // CLASSES
// class Car {
//   // создание приватного свойства #
//   #wheels;
//   // обязательно вызвать ф constructor
//   // для созданий однотипных объектов
//   constructor(brand, maxSpeed) {
//     this.brand = brand;
//     this.maxSpeed = maxSpeed;
//     this.#wheels = 4;
//   }
//   static showMaxSpeed() {
//     console.log(`${this.car} has ${this.wheels} wheels`);
//   }
//   getWheelsCount() {
//     console.log(this.#wheels);
//   }
//   setWheels(value) {
//     if (value === 3 || value === 4) {
//       this.#wheels = value;
//       return;
//     } else {
//       throw new Error("wrong wheel count");
//     }
//   }
// }

// const car3 = new Car("BMW", 200);
// const car4 = new Car("Opel", 150);

// car3.showMaxSpeed();

// car3.showMaxSpeed();
// car4.showMaxSpeed();

// console.log(car3.wheels);
// console.log(car4.wheels);

// car4.wheels = 5;
// console.log(car4.wheels);




// prototype
const ar1 = [1, 2, 3]
const ar2 = [4, 5, 7]
// ф map есть у прототипа этих объектов, поэтому ф этих объектов при сравнении дают true
console.log(ar1.map === ar2.map)




class SuperCar extends Car {
  constructor(brand, maxSpeed) {
    super()
    this.wheels = 6
  }
}












