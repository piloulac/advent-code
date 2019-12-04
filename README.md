# Advent of Code

This repository gathers my answers to [Advent of Code 2019](https://adventofcode.com/2019/). 
> This is neither an optimised nor a factorised version of the solutions of the exercices.

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)

## About

Advent of Code is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that can be solved in any programming language you like. People use them as a speed contest, interview prep, company training, university coursework, practice problems, or to challenge each other.

You don't need a computer science background to participate - just a little programming knowledge and some problem solving skills will get you pretty far. Nor do you need a fancy computer; every problem has a solution that completes in at most 15 seconds on ten-year-old hardware.

## Installation

Clone the repository and make sure to have `node` installed (note: I was running node `v8.16.0`).
```sh
$ npm i
```
That's all.

## Usage 

To create the resources for a new day (view [Architecture](#architecture) section to understand what is generated)
```sh
$ node generateDay.js --day 3 # will create resources for day-3
```
To run solution
```sh
$ node day-1/part-2.js # run the solution for a given day (here day 1 part 2)
$ 5068454 # response printed in the console
```

## Architecture

Solutions for a given day follow the schema
```sh
/ day-X
    - input.txt
    - part-1.js 
    - part-2.js
```

`part-1.js` and `part-2.js` are built following
```js
const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const input = fs.readFileSync(path.join(__dirname, filename)).toString();

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
