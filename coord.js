// Скрипт для определения координаты на которой находится мышь

var robot = require("robotjs");

// Установите флаг для проверки состояния программы.
var running = true;

// Функция, которая будет вызываться при нажатии клавиши Enter
function onEnterKeyPressed() {
  // Get mouse position.
  var mouse = robot.getMousePos();

  // Log mouse coordinates to console.
  console.log("Mouse coordinates:", mouse.x, mouse.y);
}

// Бесконечный цикл, который работает до тех пор, пока переменная-флаг равна true
while (running) {
  // Проверяем, нажата ли клавиша Enter
  if (robot.keyTap("enter")) {
    // Вызываем функцию, которая выводит координаты мыши в консоль
    onEnterKeyPressed();
  }

  // Проверяем, нажата ли клавиша Esc
  if (robot.keyTap("escape")) {
    // Изменяем значение переменной-флага на false, чтобы выйти из цикла
    running = false;
  }
}