const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const memory = fs
	.readFileSync(path.join(__dirname, filename))
	.toString()
	.split(',')
	.map(i => Number(i));
const input = 1;

const contestResponse = () => {
	const convertParamByMode = (array, mode, index) => {
		return mode ? array[index] : array[array[index]];
	};

	const IntCodeProgram = array => {
		let index = 0;
		while (array[index] !== 99) {
			const parameterMode = array[index];
			const [index1, index2, index3] = [index + 1, index + 2, index + 3];
			const opcode = parameterMode % 100;
			const modeParam1 = parseInt(parameterMode / 100) % 10;
			const modeParam2 = parseInt(parameterMode / 1000) % 10;

			switch (opcode) {
				case 1:
					array[array[index3]] =
						convertParamByMode(array, modeParam1, index1) + convertParamByMode(array, modeParam2, index2);
					index += 4;
					break;
				case 2:
					array[array[index3]] =
						convertParamByMode(array, modeParam1, index1) * convertParamByMode(array, modeParam2, index2);
					index += 4;
					break;
				case 3:
					array[array[index1]] = input;
					index += 2;
					break;
				case 4:
					console.log(array[array[index1]]);
					index += 2;
					break;
				default:
					console.log('ERROR - SHOULD NOT HAPPEN');
					break;
			}
		}

		return array[0];
	};

	IntCodeProgram(memory.slice());
};

contestResponse(); // 9938601
