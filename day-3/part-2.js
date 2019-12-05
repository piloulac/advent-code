const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const input = fs
	.readFileSync(path.join(__dirname, filename))
	.toString()
	.split('\n');

const contestResponse = () => {
	const wire1 = input[0].split(',');
	const wire2 = input[1].split(',');
	const intersections = [];

	// return an array of visited positions.
	const computeVisitedWire = wire => {
		const visited = [];
		let current = { x: 0, y: 0, steps: 0 };
		wire.forEach(instruction => {
			const direction = instruction[0];
			const length = Number(instruction.slice(1));

			for (let i = 1; i <= length; i++) {
				if (direction === 'R') {
					current.x += 1;
				}
				if (direction === 'L') {
					current.x -= 1;
				}
				if (direction === 'U') {
					current.y -= 1;
				}
				if (direction === 'D') {
					current.y += 1;
				}

				current.steps++;
				visited.push({ ...current });
			}
		});

		return visited;
	};

	// sort visited positions to compare intersections efficiently
	const visited1 = computeVisitedWire(wire1);
	const visited2 = computeVisitedWire(wire2);

	const comparePosition = (a, b) => {
		return a.x - b.x === 0 ? a.y - b.y : a.x - b.x;
	};

	visited1.sort(comparePosition);
	visited2.sort(comparePosition);

	// find intersections
	let i = 0;
	let j = 0;
	while (j < visited2.length && i < visited1.length) {
		const val1 = visited1[i];
		const val2 = visited2[j];
		if (comparePosition(val1, val2) > 0) {
			j++;
		} else if (comparePosition(val1, val2) < 0) {
			i++;
		} else {
			intersections.push(val1.steps + val2.steps);
			j++;
			i++;
		}
	}

	// print response
	console.log(Math.min(...intersections));
};

contestResponse(); // 25676
