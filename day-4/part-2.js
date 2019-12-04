const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const input = fs.readFileSync(path.join(__dirname, filename)).toString().split('-');
const [LowerBoundRange, HigherBoundRange] = input

const contestResponse = () => {
    const checkPwd = (number) => {
        const pwd = number.toString().split('').map(Number);
        const visited = new Array(10);

        if (pwd.length !== 6) {
            return false;
        }

        for (let i = 0; i < pwd.length; i++) {
            if (pwd[i] > pwd[i + 1]) {
                return false
            }

            if (pwd[i] === pwd[i + 1]) {
                visited[pwd[i]] = (visited[pwd[i]] || 0) + 1
            }
        }

        return visited.find(val => val === 1);
    }

    let response = 0;
    for (let i = Number(LowerBoundRange); i < Number(HigherBoundRange); i++) {
        if (checkPwd(i.toString())) {
            response++
        }
    }

    // print response
    console.log(response);
}

contestResponse(); // 710