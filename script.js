// a lot of element ids for number values + operations

let currentOperation = null;
let currentValue = 0; 
let secondOperand = 0;
let isSecondOperand = false; 
let isFirstOperand = true; 
let clickCount = 0; 
let display = document.querySelector('.display');

const add = document.querySelector(".addition").addEventListener("click", () => setOperation('+'), {});
const sub = document.querySelector('.subtract').addEventListener("click", () => setOperation('-'), {});
const mult = document.querySelector('.multiply').addEventListener("click", () => setOperation('*'), {});
const divide = document.querySelector('.division').addEventListener("click", () => setOperation('/'), {});
const solve = document.querySelector('.answer').addEventListener("click", () => answerEquation(), {});
const one = document.querySelector('.one').addEventListener("click", () => updateValue(1) & setSecondOperand(1), {});
const five = document.querySelector('.five').addEventListener("click", () => updateValue(5) & setSecondOperand(5), {});
const three = document.querySelector('.three').addEventListener("click", () => updateValue(3) & setSecondOperand(3), {});
const nine = document.querySelector('.nine').addEventListener("click", () => updateValue(9) & setSecondOperand(9),{});
const six = document.querySelector('.six').addEventListener("click", () => updateValue(6) & setSecondOperand(6),{});
const two = document.querySelector('.two').addEventListener("click", () => updateValue(2) & setSecondOperand(2), {});
const seven = document.querySelector('.seven').addEventListener("click", () => updateValue(7) & setSecondOperand(7), {});
const eight = document.querySelector('.eight').addEventListener("click", () => updateValue(8) & setSecondOperand(8), {});
const zero = document.querySelector('.zero').addEventListener("click", () => updateValue(0) & setSecondOperand(0), {});
const four = document.querySelector('.four').addEventListener("click", () => updateValue(4) & setSecondOperand(4), {});


function updateValue(value) {
    if (isFirstOperand === true) {
        currentValue = currentValue.toString() + value;        
        console.log("1 " +  currentValue);
        display.innerText += currentValue;
}}; 

function setOperation(operation) {
    currentOperation = operation;
    display.innerText += currentOperation; 
    console.log(currentOperation);
    isSecondOperand = true
    isFirstOperand = false
};

function setSecondOperand(value) {
    if (isSecondOperand === true) {
        secondOperand = secondOperand.toString() + value;        
        console.log("2 " + secondOperand);
        display.innerText +=  secondOperand;
    }
};

function answerEquation() {
    if (currentOperation === "+") {
        sum = currentValue + secondOperand;
        display.innerText = sum; 
    }
};

