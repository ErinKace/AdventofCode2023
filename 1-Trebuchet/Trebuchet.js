"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function getFirstDigit(input) {
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        var NumChar = parseInt(char);
        if (!isNaN(NumChar)) {
            return char;
        }
    }
}
function getLastDigit(input) {
    var reversedInput = input.split("").reverse().join("");
    return getFirstDigit(reversedInput);
}
function filterOutChars(string) {
    string.split("").filter(function (n) { !isNaN(Number(n)); });
    if (string.length > 1) {
        return string[0] + string[string.length - 1];
    }
    return string[0] + string[0];
}
function returnCoordinateArray(input) {
    var inputArray = input.split("\n");
    var returnArray = [];
    for (var _i = 0, inputArray_1 = inputArray; _i < inputArray_1.length; _i++) {
        var line = inputArray_1[_i];
        var returnedString = getFirstDigit(line) + getLastDigit(line);
        var returnedNum = Number(returnedString);
        returnArray.push(returnedNum);
    }
    return returnArray;
}
function sumCoordinates(numArray) {
    var finalSum = 0;
    for (var _i = 0, numArray_1 = numArray; _i < numArray_1.length; _i++) {
        var num = numArray_1[_i];
        finalSum += num;
    }
    return finalSum;
}
var inputToCalculate = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet";
function getFinalInput() {
    return __awaiter(this, void 0, void 0, function () {
        var inputCoordinates;
        return __generator(this, function (_a) {
            inputCoordinates = new Promise(function (resolve) {
                var readFile = fs.readFileSync("/Users/erinkacerovskis/Documents/LaunchCode/AdventOfCode2023/AdventofCode2023/1-Trebuchet//InputCoordinates.txt");
                resolve(String(readFile));
            });
            return [2 /*return*/, inputCoordinates];
        });
    });
}
getFinalInput().then(function (result) {
    var readFile = String(result);
    console.log(sumCoordinates(returnCoordinateArray(readFile)));
});
// let numberArray: number[] = returnCoordinateArray(finalInput);
// let finalResult: number = sumCoordinates(numberArray);
// console.log(numberArray);
// console.log(sumCoordinates(returnCoordinateArray(inputToCalculate)));
// console.log(finalResult);
