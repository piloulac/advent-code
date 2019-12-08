const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const memory = fs
	.readFileSync(path.join(__dirname, filename))
	.toString()
	.split(',')
	.map(i => Number(i));

const contestResponse = () => {
	const convertParamByMode = (array, mode, value) => {
		return mode ? value : array[value];
	};

	const perm = array => {
		let permutations = [];

		for (let i = 0; i < array.length; i = i + 1) {
			let rest = perm(array.slice(0, i).concat(array.slice(i + 1)));

			if (!rest.length) {
				permutations.push([array[i]]);
			} else {
				for (let j = 0; j < rest.length; j = j + 1) {
					permutations.push([array[i]].concat(rest[j]));
				}
			}
		}
		return permutations;
	};

	const IntCodeProgram = (array, inputs) => {
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
					array[value1] = inputs.shift();
					index += 2;
					break;
				case 4:
					return array[value1];
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
	};

	const permutations = perm([0, 1, 2, 3, 4]);
	let maxThrusters = -1;
	permutations.forEach(phaseSettings => {
		let currentInput = 0;
		phaseSettings.forEach(setting => {
			const currentCopy = memory.slice();
			currentInput = IntCodeProgram(currentCopy, [setting, currentInput]);
		});
		if (currentInput > maxThrusters) {
			maxThrusters = currentInput;
		}
	});

	// print response
	console.log(maxThrusters);
};

contestResponse(); // 21760
