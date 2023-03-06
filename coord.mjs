//Программа для определения координат на которых находится курсор
//Program for determining the coordinates of the cursor

import robot from 'robotjs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getMouseCoords() {
  const mousePos = robot.getMousePos();
  console.log(`Mouse coordinates: x=${mousePos.x}, y=${mousePos.y}`);
}

process.stdin.on('data', async function (input) {
  const key = input.toString().trim();
  if (key === 'c') {
    getMouseCoords();
  } else if (key === 'q') {
    rl.close();
    process.stdin.pause();
  }
});

console.log('Press "c" to get mouse coordinates, or "q" to quit...');

process.stdin.setRawMode(true);
process.stdin.resume();