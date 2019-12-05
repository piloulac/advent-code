const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const input = fs
	.readFileSync(path.join(__dirname, filename))
	.toString()
	.split('\n')
	.map(i => Number(i));

const contestResponse = () => {
	const computeFuel = (weight, sum) => {
		let fuelRequired = parseInt(weight / 3) - 2;
		if (fuelRequired <= 0) {
			return sum;
		}
		return computeFuel(fuelRequired, sum + fuelRequired);
	};

	let fuelRequired = 0;

	input.forEach(weight => {
		fuelRequired += computeFuel(weight, 0);
	});

	// print response
	console.log(fuelRequired);
};

contestResponse(); // 5068454
