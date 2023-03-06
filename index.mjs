//первый тест

import readline from 'readline';
import clipboardy from 'clipboardy';
import robot from 'robotjs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Press Ctrl to continue...', async () => {
  // Нажать Ctrl+C в точке (100, 100)
  robot.moveMouse(303, 451);
  robot.keyTap('tab', ['alt']);
  robot.mouseClick('left', 'double');
  robot.setMouseDelay(2000);
  robot.keyTap('c', ['control']);
  console.log("прошел робот");

  // Чтение текста из буфера обмена
  const text = await clipboardy.read();
  console.log(text); // Выведет "текст в буфере"
  
  rl.close();
});

// if(robot.getMousePos().x===335 && robot.getMousePos().y===460) {
  
// }