'use strict';

const fs = require('fs');
const commander = require('commander');

const createFolderIfNeeded = (folderPath) => {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }
};

const formatBlock = (str, indentation) => {
    return str
        .split('\n')
        .map((line, index, allLines) => {
            if (line.trim() === '' && (index === 0 || index === allLines.length - 1)) {
                return false;
            }

            return line.substr(indentation);
        })
        .filter((line) => {
            return line !== false;
        })
        .join('\n');
};

const createEndpoint = (day) => {
    const codeFile = formatBlock(`
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
    `, 8);

    createFolderIfNeeded(`${__dirname}/day-${day}`);
    fs.writeFileSync(`${__dirname}/day-${day}/part-1.js`, codeFile, 'utf8');
    fs.writeFileSync(`${__dirname}/day-${day}/part-2.js`, codeFile, 'utf8');
    fs.writeFileSync(`${__dirname}/day-${day}/input.txt`, '', 'utf8');

    console.log(`Files have been created in ${__dirname}/day-${day}`);
};

if (require.main === module) {
    commander
        .option('-d, --day <number>', 'number of the day, e.g 1')
        .parse(process.argv);

    if (!commander.day) {
        commander.help();
        process.exit(1);
    }

    createEndpoint(commander.day);
}
