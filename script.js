// a lot of element ids for number values + operations

let currentOperation = null;
let currentValue = null; 
let secondOperand = null;
let isSecondOperand = false; 
let isFirstOperand = true; 
let clickCount = 0; 
let display = document.querySelector('.display');

const add = document.querySelector(".addition").addEventListener("click", () => setOperation('+'), {});
const sub = document.querySelector('.subtract').addEventListener("click", () => setOperation('-'), {});
const mult = document.querySelector('.multiply').addEventListener("click", () => setOperation('*'), {});
const divide = document.querySelector('.division').addEventListener("click", () => setOperation('/'), {});
const one = document.querySelector('.one').addEventListener("click", () => updateValue(1), setSecondOperand(), {});
const five = document.querySelector('.five').addEventListener("click", () => updateValue(5), setSecondOperand(), {});
const three = document.querySelector('.three').addEventListener("click", () => updateValue(3), setSecondOperand(), {});
const nine = document.querySelector('.nine').addEventListener("click", () => updateValue(9), setSecondOperand(),{});
const six = document.querySelector('.six').addEventListener("click", () => updateValue(6), setSecondOperand(),{});
const two = document.querySelector('.two').addEventListener("click", () => updateValue(2), setSecondOperand(), {});
const seven = document.querySelector('.seven').addEventListener("click", () => updateValue(7), setSecondOperand(), {});
const eight = document.querySelector('.eight').addEventListener("click", () => updateValue(8), setSecondOperand(), {});
const zero = document.querySelector('.zero').addEventListener("click", () => updateValue(0), setSecondOperand(), {});

function updateValue(value) {
    if (isFirstOperand = true) {
        currentValue = value;
        console.log("1" +  currentValue);
        display.innerText = currentValue;
    } else {
        console.error("Operation is not set.");
    }
}; 

function setOperation(operation) {
    currentOperation = operation;
    display.innerText = currentValue + currentOperation; 
    isSecondOperand = true; 
    console.log(currentOperation);
}

function setSecondOperand(value) {
    if (isSecondOperand = true) {
        secondOperand = value;
        console.log("2" + secondOperand);
        display.innerText = currentValue + currentOperation + secondOperand;
    } else {
        console.error("Operation is not set.");
    }
}



