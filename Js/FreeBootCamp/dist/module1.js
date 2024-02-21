"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumber = exports.PI = void 0;
//variables
exports.PI = 3.14;
//function
function generateRandomNumber() {
    return Math.floor((Math.random() * 100) + 1);
}
exports.generateRandomNumber = generateRandomNumber;
