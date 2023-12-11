import * as fs from 'fs';

const textNums = [
    "zero","one","two","three","four","five","six","seven","eight","nine"
];

const textNumValue = {
    "zero":0,
    "one":1,
    "two":2,
    "three":3,
    "four":4,
    "five":5,
    "six":6,
    "seven":7,
    "eight":8,
    "nine":9
}

function checkForTextNums(testString: string, startingIndex: number = 0) {
    let endingIndex = testString.length;
    for (let textNum of textNums) {
        if (startingIndex > 0) {
            startingIndex = textNum.length - endingIndex;
        }
        if (testString === textNum.substring(startingIndex, endingIndex)){
            return true;
        }
    }
    return false;
}

function getFirstDigit(input: string) {
    let testString: string = "";
    for (let char of input) {
        testString+=char;
        if (!checkForTextNums(testString)) {
            testString = "";
        }
        if (textNums.includes(testString)){
            return textNumValue[testString];
        }
        let NumChar = parseInt(char);
        if (!isNaN(NumChar)) {
            return char;
        }
    }
}

function getLastDigit(input) {
    // let reversedInput = input.split("").reverse().join("");
    let testString: string = "";
    for (let i = (input.length-1); i>0; i--) {
        let testChar = input[i];
        testString = testChar + testString;
        if (!checkForTextNums(testString, 1)) {
            testString = "";
        }
        if (textNums.includes(testString)){
            return textNumValue[testString];
        }
        let NumChar = parseInt(testChar);
        if (!isNaN(NumChar)) {
            return testChar;
        }
    }
    
    // return getFirstDigit(reversedInput);
}


// function filterOutChars(string: string): string {
//     string.split("").filter((n: string)=>{!isNaN(Number(n))});
//     if (string.length > 1) {
//         return string[0] + string[string.length-1];
//     }
//     return string[0]+string[0];
// }

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
`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;


async function getFinalInput() {
    let inputCoordinates = new Promise((resolve)=>{
        let readFile = fs.readFileSync("/Users/erinkacerovskis/Documents/LaunchCode/AdventOfCode2023/AdventofCode2023/1-Trebuchet//InputCoordinates.txt");
       resolve(String(readFile));
    });
    return inputCoordinates;
}

// getFinalInput().then(function(result) {
//     let readFile = String(result);
//     console.log(sumCoordinates(returnCoordinateArray(readFile)));
// })

console.log(sumCoordinates(returnCoordinateArray(inputToCalculate)));

// let numberArray: number[] = returnCoordinateArray(finalInput);
// let finalResult: number = sumCoordinates(numberArray);
// console.log(numberArray);
// console.log(sumCoordinates(returnCoordinateArray(inputToCalculate)));
// console.log(finalResult);
