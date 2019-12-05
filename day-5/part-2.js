const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const memory = fs
	.readFileSync(path.join(__dirname, filename))
	.toString()
	.split(',')
	.map(i => Number(i));
const input = 5;

const contestResponse = () => {
	const convertParamByMode = (array, mode, value) => {
		return mode ? value : array[value];
	};

	const IntCodeProgram = array => {
		let index = 0;
		while (array[index] !== 99 && array[index] !== 1109) {
			const parameterMode = array[index];
			const opcode = parameterMode % 100;
			const [value1, value2, value3] = [array[index + 1], array[index + 2], array[index + 3]];
			const modeParam1 = parseInt(parameterMode / 100) % 10;
			const modeParam2 = parseInt(parameterMode / 1000) % 10;

			switch (opcode) {
				case 1:
					array[value3] = convertParamByMode(array, modeParam1, value1) + convertParamByMode(array, modeParam2, value2);
					index += 4;
					break;
				case 2:
					array[value3] = convertParamByMode(array, modeParam1, value1) * convertParamByMode(array, modeParam2, value2);
					index += 4;
					break;
				case 3:
					array[value1] = input;
					index += 2;
					break;
				case 4:
					console.log(array[value1]);
					index += 2;
					break;
				case 5:
					index =
						convertParamByMode(array, modeParam1, value1) !== 0
							? convertParamByMode(array, modeParam2, value2)
							: index + 3;
					break;
				case 6:
					index =
						convertParamByMode(array, modeParam1, value1) === 0
							? convertParamByMode(array, modeParam2, value2)
							: index + 3;
					break;
				case 7:
					array[value3] =
						convertParamByMode(array, modeParam1, value1) < convertParamByMode(array, modeParam2, value2) ? 1 : 0;
					index += 4;
					break;
				case 8:
					array[value3] =
						convertParamByMode(array, modeParam1, value1) === convertParamByMode(array, modeParam2, value2) ? 1 : 0;
					index += 4;
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

contestResponse(); // 4283952
