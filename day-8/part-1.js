const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const input = fs
	.readFileSync(path.join(__dirname, filename))
	.toString()
	.split('')
	.map(Number);

const wide = 25;
const tall = 6;

const contestResponse = () => {
	const layers = [];

	while (input.length) {
		layers.push(input.splice(0, wide * tall));
	}

	const layersState = [];
	layers.forEach(layer => {
		const layerState = { 0: 0, 1: 0, 2: 0 };
		layer.forEach(value => {
			layerState[value] = layerState[value] + 1;
		});

		layersState.push(layerState);
	});

	let min = { 0: -1, sum: -1 };
	layersState.forEach(row => {
		if (min['0'] === -1 || row['0'] < min['0']) {
			min = { '0': row['0'], sum: row['1'] * row['2'] };
		}
	});

	// print response
	console.log(min.sum);
};

contestResponse(); // 2080
