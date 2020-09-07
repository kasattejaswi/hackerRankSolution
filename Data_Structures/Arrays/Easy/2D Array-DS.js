'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(a) {
    let max = -63; // Range is -9 to 9. So minimum value will be -9 * 7
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 4; k++) {
            let sum = 0;
            sum += a[i][k] + a[i][k + 1] + a[i][k + 2] + a[i + 1][k + 1] + a[i + 2][k] + a[i + 2][k + 1] + a[i + 2][k + 2];
            if (max < sum) {
                max = sum
            }
        }
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}