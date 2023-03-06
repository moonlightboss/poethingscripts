//Программа запускается когда нажимаешь кнопку А, копирует по определенной координате


import clipboardy from 'clipboardy';
import robot from 'robotjs';
import keypress from 'keypress';
import readline from 'readline';

// Инициализируем библиотеку keypress
keypress(process.stdin);

// Создаем интерфейс для ввода команд с консоли
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Функция для выполнения действий
async function myFunction() {
  // Нажать Ctrl+C в точке (100, 100)
  robot.moveMouse(315, 456);
  robot.keyTap('c', ['control']);

  // Чтение текста из буфера обмена
  const text = await clipboardy.read();

  console.log(text); // Выведет "Hello, World!"
}

// Ждем нажатия определенной клавиши для запуска функции
process.stdin.on('keypress', async function (ch, key) {
  if (key.name === 'a') { // Здесь задаем клавишу, которая будет запускать выполнение программы
    await myFunction();
    rl.close(); // Закрываем интерфейс для ввода команд
  }
});

// Выводим инструкцию для пользователя
console.log('Press "a" to continue...');

// Включаем режим ввода
process.stdin.setRawMode(true);
process.stdin.resume();