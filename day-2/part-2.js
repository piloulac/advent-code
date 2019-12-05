const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const input = fs.readFileSync(path.join(__dirname, filename)).toString().split(',').map(i => Number(i))

const contestResponse = () => {

  const IntCodeProgram = (array, noun, verb) => {
    const restoreGravity = (noun, verb) => {
      array[1] = noun;
      array[2] = verb;
    }

    restoreGravity(noun, verb);
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

  const output = 19690720;
  let response = 'FAIL';
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb < 99; verb++) {
      if (output === IntCodeProgram(input.slice(), noun, verb)) {
        response = 100 * noun + verb;
      };
    }
  }

  // print response
  console.log(response);
}

contestResponse(); // 7603
