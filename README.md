# Advent of Code

This repository gathers my answers to [Advent of Code 2019](https://adventofcode.com/2019/). 
> This is neither an optimised nor a factorised version of the solutions of the exercices.

## About

Advent of Code is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that can be solved in any programming language you like. People use them as a speed contest, interview prep, company training, university coursework, practice problems, or to challenge each other.

You don't need a computer science background to participate - just a little programming knowledge and some problem solving skills will get you pretty far. Nor do you need a fancy computer; every problem has a solution that completes in at most 15 seconds on ten-year-old hardware.

## Solutions

Solutions follow the schema
```sh
/ day-X
    - input.txt
    - part-1.js 
    - part-2.js
```

Each part is built following:
```js
const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const input = fs.readFileSync(path.join(__dirname, filename));

const contestResponse = () => {
    // exercice specific functions are defined below
    // -----
    // INSERT FUNCTION
    // -----

    // print response
    console.log(response);
}

contestResponse(); // expected result is present as a comment HERE
```

In order to run exercice, make sure to have `node` installed. Then use:
```sh
$ node day-1/part-2.js
$ 5068454 # result of the part two of the first exercice
$ node day-2/part-1.js
$ 5534943 # result of the first part of the second exercice
```