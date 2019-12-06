const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const input = fs
	.readFileSync(path.join(__dirname, filename))
	.toString()
	.split('\n')
	.map(i => i.split(')'));

const start = 'YOU';
const target = 'SAN';

const contestResponse = () => {
	const orbits = {};
	input.forEach(row => {
		const [a, b] = row;
		if (!orbits[a]) {
			orbits[a] = [];
		}
		if (!orbits[b]) {
			orbits[b] = [];
		}

		orbits[a] = [...orbits[a], b];
		orbits[b] = [...orbits[b], a];
	});

	const stack = [{ val: start, depth: 0 }];
	const visited = new Set();
	let found = -1;
	while (stack.length > 0 && found === -1) {
		const orbit = stack.pop();
		if (visited.has(orbit.val)) {
			break;
		}

		visited.add(orbit.val);

		const depth = orbit.depth + 1;
		const fistons = orbits[orbit.val];
		if (fistons.find(f => f === target)) {
			found = depth;
			break;
		}

		stack.push(
			...fistons
				.filter(f => !visited.has(f))
				.map(f => ({ val: f, depth }))
		);
	}

	console.log(found - 2);
};

contestResponse(); // 346
