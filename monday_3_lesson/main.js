const sm = document.getElementById("small");
const md = document.getElementById("medium");
const bg = document.getElementById("big");
const handler1 = (e) => {
    alert("click");
    e.stopPropagation();
};
// самый простой и устаревший способ
// назначения событий элементам
// sm.onclick = handler1;
// const handler2 = () => {
//     alert("yo");
// };
// вместо е можно использовать любое другое
// это все равно будет браузерное событие
// const handler3 = (e) => {
//     alert(e.currentTarget);
// };
const handler4 = (e) => {
    console.dir(e.currentTarget);
};
const handler5 = (e) => {
    console.dir(e.target);
};
const handler6 = (e) => {
    alert(e.target.id);
};
// перезатирается первое значение
sm.onclick = handler1;
// sm.onclick = handler2; // удаление первого обработчика
// удаление обработчика
// sm.onclick = null;

// второй способ назначение события
// не удобно удалять одну из функций, неочевидно
// литерал функции
// sm.onclick = () => {
//     handler1();
//     handler2();
// };
// sm.onclick = handler2; // удаление первого обработчика

// лучший и самый современный
// sm.addEventListener("click", handler1);
// sm.addEventListener("click", () => {
//     alert("yo");
// });

// const func = () => handler1;
// sm.removeEventListener("click", handler1);
// sm.removeEventListener("click", handler2); // скобки ставить нельзя в ссылке
// sm.addEventListener("click", () => alert("90"));
// это не работает!!!
// sm.removeEventListener("click", () => alert("90"));

// in react onClick


// при возникновении события в браузере он формирует событие и передаст ОБЪЕКТ СОБЫТИЯ в нашу функцию
// они имеют некоторую общую структуру
// event ev e => {} (object)
// sm.addEventListener("click", handler3);

// sm.addEventListener("click", handler4);
// sm.addEventListener("click", handler5);
// md.addEventListener("click", handler4);
// bg.addEventListener("click", handler4);
// bg.addEventListener("click", handler6);

// делегирование событий
const handler7 = (e) => {
    if (e.target.tagName === "BUTTON") {
          alert(e.target.id);
    }
};
sm.addEventListener("click", handler7);


const a = document.getElementById('a');
a.addEventListener("click", (e) => {
    e.preventDefault();
    alert("123");
});
