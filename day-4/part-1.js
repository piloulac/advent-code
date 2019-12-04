const fs = require('fs');
const path = require('path');
const filename = 'input.txt';

const input = fs.readFileSync(path.join(__dirname, filename)).toString().split('-');
const [LowerBoundRange, HigherBoundRange] = input

const contestResponse = () => {
    const checkPwd = (number) => {
        const pwd = number.toString().split('').map(Number);
        let hasDouble = false;

        if (pwd.length !== 6) {
            return false;
        }

        for (let i = 0; i < pwd.length; i++) {
            if (pwd[i] > pwd[i + 1]) {
                return false
            }

            if (pwd[i] === pwd[i + 1]) {
                hasDouble = true
            }
        }

        return hasDouble
    }

    let response = 0;
    for (let i = Number(LowerBoundRange); i < Number(HigherBoundRange); i++) {
        if (checkPwd(i)) {
            response++
        }
    }

    // // print response
    console.log(response);
}

contestResponse(); // 1099