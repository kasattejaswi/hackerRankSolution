"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .replace(/\s*$/, "")
        .split("\n")
        .map((str) => str.replace(/\s*$/, ""));

    main();
});

function rotateArray(n, d, arr) {
    let finalRotation = d > n ? d % n : d;
    let resultArr = [];
    for (let i = finalRotation; i < arr.length; i++) {
        resultArr.push(arr[i]);
    }
    for (let i = 0; i < finalRotation; i++) {
        resultArr.push(arr[i]);
    }

    return resultArr;
}

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nd = readLine().split(" ");

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine()
        .split(" ")
        .map((aTemp) => parseInt(aTemp, 10));
    const result = rotateArray(n, d, a);
    console.log(result.join(" "));
}