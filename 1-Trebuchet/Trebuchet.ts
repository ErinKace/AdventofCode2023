import * as fs from 'fs';



function getFirstDigit(input: string) {
    for (let char of input) {
        let NumChar = parseInt(char);
        if (!isNaN(NumChar)) {
            return char;
        }
    }
}

function getLastDigit(input) {
    let reversedInput = input.split("").reverse().join("");
    return getFirstDigit(reversedInput);
}


function filterOutChars(string: string): string {
    string.split("").filter((n: string)=>{!isNaN(Number(n))});
    if (string.length > 1) {
        return string[0] + string[string.length-1];
    }
    return string[0]+string[0];
}

function returnCoordinateArray(input: string):number[] {
    let inputArray = input.split("\n");
    let returnArray: number[] = [];
    for (let line of inputArray) {
        let returnedString = getFirstDigit(line)+getLastDigit(line);
        let returnedNum = Number(returnedString);
        returnArray.push(returnedNum);
    }
    return returnArray;
}

function sumCoordinates(numArray: number[]): number {
    let finalSum = 0;
    for (let num of numArray) {
        finalSum += num;
    }
    return finalSum;
}

let inputToCalculate: string = 
`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;


async function getFinalInput() {
    let inputCoordinates = new Promise((resolve)=>{
        let readFile = fs.readFileSync("InputCoordinates.txt");
       resolve(String(readFile));
    });
    return inputCoordinates;
}

getFinalInput().then(function(result) {
    let readFile = String(result);
    console.log(sumCoordinates(returnCoordinateArray(readFile)));
})

// let numberArray: number[] = returnCoordinateArray(finalInput);
// let finalResult: number = sumCoordinates(numberArray);
// console.log(numberArray);
// console.log(sumCoordinates(returnCoordinateArray(inputToCalculate)));
// console.log(finalResult);
