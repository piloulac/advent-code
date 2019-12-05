const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const input = fs
	.readFileSync(path.join(__dirname, filename))
	.toString()
	.split('\n')
	.map(i => Number(i));

const contestResponse = () => {
	let fuelRequired = 0;

	input.forEach(weight => {
		fuelRequired += parseInt(weight / 3) - 2;
	});

	// print response
	console.log(fuelRequired);
};

contestResponse(); // 3380880
