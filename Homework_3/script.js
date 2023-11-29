"use strict";

//   1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", function () {
  console.log("все теги прогрузились");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener("load", function () {
  console.log("страница загрузилась");
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("super_element")) {
    console.log(
      `Класс "super_element" присутствует в элементе ${event.target.tagName.toLowerCase()}.`
    );
  } else {
    console.log(
      `Класс "super_element" отсутствует в элементе ${event.target.tagName.toLowerCase()} .`
    );
  }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

document.querySelector("textarea").addEventListener("mouseover", function () {
  console.log("Вы навели на textarea.");
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

document.querySelector("ul").addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log(event.target.textContent);
  }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul?
//   Текст из 5 задания выводится в консоль перед текстом из 3 задания, потому что обработчик события клика на ul срабатывает раньше, чем обработчик события клика на конкретной кнопке. Это связано с тем, что обработчики событий выполняются в порядке, в котором они были добавлены. В данном случае, обработчик события на ul был добавлен раньше, чем обработчик события на кнопках, поэтому он срабатывает первым.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

var liElements = document.querySelectorAll("li");
for (var i = 0; i < liElements.length; i++) {
  if ((i + 1) % 2 === 0) {
    liElements[i].style.backgroundColor = "green";
  }
}
