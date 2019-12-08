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

	const getPixel = (remainingLayers, index) => {
		const value = remainingLayers.shift()[index];
		if (value !== 2) {
			return value;
		}
		return getPixel(remainingLayers, index);
	};

	const image = [];
	for (let index = 0; index < wide * tall; index++) {
		image.push(getPixel(layers.slice(), index));
	}

	// print response
	const message = image.slice();
	while (message.length) {
		console.log(
			message
				.splice(0, wide)
				.join(' ')
				.replace(/0/g, '.')
		);
	}
};

contestResponse(); // AURCY
