const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const input = fs.readFileSync(path.join(__dirname, filename)).toString().split(',').map(i => Number(i))

const contestResponse = () => {

  const IntCodeProgram = (array) => {
    const restoreGravity = () => {
      array[1] = 12;
      array[2] = 2;
    }

    restoreGravity();
    let index = 0;
    while (array[index] !== 99) {
      const opcode = array[index];

      if (opcode === 1) {
        array[array[index + 3]] = array[array[index + 1]] + array[array[index + 2]]
      }

      if (opcode === 2) {
        array[array[index + 3]] = array[array[index + 1]] * array[array[index + 2]]
      }

      index += 4
    };

    return array[0];
  }

  const array = input.slice();

  // print response
  console.log(IntCodeProgram(array));
}

contestResponse(); // 5534943