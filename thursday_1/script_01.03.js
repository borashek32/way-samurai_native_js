console.log("Thursday_1");
// global scope: window - chrome, {} - node (global)
// Function // function | arrow function
// call, apply, bind
// constructors

// console.log(this);

// const a = () => console.log(this); // стрелочные ф не имеют контекст, а используют
// a();                               // контекст и this указывает на scope выше
                                      // лексическое окружение стрелочной ф не создается
                                      // в момент создания этой ф
                                      // объект не создает своего лексического окружения

// function foo() {
  // const a = () => console.log(this);
  // a();
// }
// foo();
//
// const user = {
//   name: "Nataly",
//   showName: function() {
//     console.log(this.name);
//   }
// };
// user.showName(); // Nataly
//
//
// const user1 = {
//   name: "Nataly",
//   showName: () => {
//     console.log("30 ", this.name);
//   }
// };
// user1.showName(); // undefined

// const car = {
//   color: "red",
//   showColor() {
//       console.log("39 ", this.color);
//     }
// };
// car.showColor(); // undefined
//
// const car1 = {
//   color: "red",
//   showColor: function() {
//     console.log("48 ", this.color);
//   }
// };
// car1.showColor(); // red

// const car2 = {
//   maxSpeed: 200
// };
// const car3 = {
//   maxSpeed: 300
// };
//
// function showMaxSpeed() {
//   console.log(this.maxSpeed);
// }
//
// car2.s = showMaxSpeed; // тут ссылка на ф showMaxSpeed // обычная ф будет искать this слева от точки
// car3.s = showMaxSpeed;
//
// car2.s();
// car3.s();



// call apply - call принимает доп параметры в виде списка и сразу вызывается
// apply - в виде массива и сразу вызывается
// bind - возвращает функцию и ее нужно вызвать

// const car20 = {
//   maxSpeed: 200,
//   showMaxSpeed: function (a, b) {
//     console.log(this.maxSpeed);
//   }
// };
// const car21 = {
//   maxSpeed: 300
// };
//
// car20.showMaxSpeed();
//
// car20.showMaxSpeed.call(car21, 1, 2);
// car20.showMaxSpeed.apply(car21, [1, 2]);
//
// car20.showMaxSpeed.bind(car21)();

// const scooter = {
//   maxSpeed: 60,
// };
//
// const car20 = {
//   maxSpeed: 200,
//   showMaxSpeed() {
//     (() => {
//       console.log(this.maxSpeed);
//     }).call(scooter); // call не работает со стрелочными ф, то есть
//   }                   // this указывает на контекст car20
// };                    // здесь call не может поменять контекст
//
// car20.showMaxSpeed();
//
//
// const scooter1 = {
//   maxSpeed: 60,
// };
//
// const bike = {
//   maxSpeed: 400
// };
//
// const car24 = {
//   maxSpeed: 200,
//   showMaxSpeed() {
//     console.log(this.maxSpeed);
//   }
// };
//
// car24.showMaxSpeed.bind(scooter1)();
// // второй bind() игнорируется
// car24.showMaxSpeed.bind(scooter1).bind(bike)();

// class Dialer {
//   state = {
//     models: ["Yaris", "Corolla", "Prado"]
//   },
//   showModels() {
//     this.setState();
//   },
//   render() {
//     return <List getModels={this.showModels.bind(this)} />
//   }
// }
//
// class List {
//   // {getModels}
// }


// если стрелочная ф - то this создается в момент создания
// если обычная ф - то this создается в момент вызова

const dealer = {
  name: 'Toyota',
  models: ['Yaris', 'Corolla', 'Prado'],

  showDealerModels() {
    // const that = this;
    //this

    // const foo = (model) => {
    //   console.log(`Dealer: ${this.name} have: ${model}`);
    // };
    // this.models.forEach(foo);
    this.models.forEach(function(model){
      console.log(`Dealer: ${this.name} have: ${model.toUpperCase()}`);
    }, this);
  },
};

dealer.showDealerModels();
console.log(dealer.models);

// const car = {
//   brand: "ferrari",
//   color: "red",
//   showColor() {
//     return this.color;
//   },
//   showBrand: () => {
//     return this.brand;
//   }
// };
//
// console.log(car.showColor());
// console.log(car.showBrand()); // в момент вызова this это window,
//                               // а у window нет свойства brand
//
// console.log(car.showBrand.call(car));


















