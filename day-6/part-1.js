const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const input = fs
	.readFileSync(path.join(__dirname, filename))
	.toString()
	.split('\n')
	.map(i => i.split(')'));

const contestResponse = () => {
	const orbits = {};
	input.forEach(row => {
		const [a, b] = row;
		if (!orbits[a]) {
			orbits[a] = [];
		}
		orbits[a] = [...orbits[a], b];
	});

	const depth = planet => {
		if (!orbits[planet]) {
			return 0;
		}

		let count = 0;
		orbits[planet].forEach(orbitedPlanet => {
			count += depth(orbitedPlanet);
			count++;
		});
		return count;
	};

	let response = 0;
	Object.keys(orbits).forEach(key => {
		response += depth(key);
	});

	console.log(response);
};

contestResponse(); // 154386
