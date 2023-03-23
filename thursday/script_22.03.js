// pattern subscriber

// subscriber examples                                          // какое событие произошло?
// store.subscribe(function subscriber() {});                   // изменение стейта
// button.addEventListener("click", function subscriber() {});  // произошел клик
// useSelector from react                                       // хук useSelector в реакте
// new Promise().then('click', function() {});                  // произошел клик
// setInterval(() => {}, mlsec);                                // прошло столько-то секунд
// setTimeout(() => {}, mlsec);                                 // прошло столько-то секунд
// <AppButton onClick={() => {}} />                             // колбеки в компонентах - это сдушатели событий


// const store = {
//   _subscribers: [
//     // subscribers to store changes
//   ],
//   dispatch() {
//     // change store
//     this._subscribers.forEach(s => s());
//   },
//   subscribe(subscriber) {
//     this._subscribers.push(subscriber);
//   }
// }


const button = {
  _subscribers: [
    "click": [],
    "focus": []
  ],
  click() {
    this._subscribers["click"].forEach(sub => sub())
  },
  focus() {

  },
  addEventListener(subscriber) {
    this._subscribers[eventName].push(eventName, subscriber);
  }
}

button.addEventListener('click', () => {
  console.log('click');
})

button.addEventListener('click', () => {
  alert('click');
})






















