// placeholder variables for operands, operation 
let currentOperation = null;
let currentValue = 0; 
let secondOperand = 0;
let isSecondOperand = false; 
let isFirstOperand = true; 

// array for all colors to eventually change background
const color = ["red", "orange", "yellow", "green", "blue", "purple"];
let index = 1; 

const buttonColor = ["red", "orange", "yellow", "green", "blue", "purple"];
let buttonIndex = 1; 


//variables, event listeners, querey selectors
let display = document.querySelector('.display');
const useless = document.querySelector('.useless').addEventListener("click", () => uselessFunction(), {});
const selfDestruct = document.querySelector('.disapear').addEventListener("click", () => everythingDisapears(), {});
const changeColor = document.querySelector('.color').addEventListener("click", () => changeBackground(index), {});
const clear = document.querySelector(".close").addEventListener("click", () => clearText(), {});
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

// function to create the first operand on click
function updateValue(value) {
    if (isFirstOperand === true) {
        currentValue = currentValue.toString() + value;        
        console.log("1 " +  currentValue);
        display.innerText = parseInt(currentValue);
}}; 

// function to set operation of equation
function setOperation(operation) {
    currentOperation = operation;
    display.innerText += currentOperation; 
    console.log(currentOperation);
    isSecondOperand = true
    isFirstOperand = false
    display.innerText = parseInt(currentValue) + " " + currentOperation;
};

// function to set second operand 
function setSecondOperand(value) {
    if (isSecondOperand === true) {
        secondOperand = secondOperand.toString() + value;        
        console.log("2 " + secondOperand);
        display.innerText = parseInt(currentValue) + " " + currentOperation + " " + parseInt(secondOperand);

    }
};

//function to solve equation when equal is clicked 
function answerEquation() {
    if (currentOperation === "+") {
        sum = parseInt(currentValue) + parseInt(secondOperand);
        display.innerText = parseFloat(sum); 
    } else if (currentOperation === "-") {
        diff = parseInt(currentValue) - parseInt(secondOperand);
        display.innerText = parseFloat(diff); 
    } else if (currentOperation === "*") {
        product = parseInt(currentValue) * parseInt(secondOperand);
        display.innerText = parseFloat(product); 
    } else if (currentOperation === "/") {
        dividend = parseInt(currentValue) / parseInt(secondOperand);
        display.innerText = parseFloat(dividend); 
    }
};

//function to clear text inside of display div
function clearText() {
    display.innerText = "";
    currentOperation = null;
    currentValue = 0; 
    secondOperand = 0;
    isSecondOperand = false; 
    isFirstOperand = true; 
};

// self-destruct button
function everythingDisapears() {
    document.body.style.display = "none";
}

// change backround function
function changeBackground() {
    document.body.style.backgroundColor = color[index];
    index = (index + 1) % color.length;
}

//useless function 
function uselessFunction() {
    alert("Why'd you click the useless button")
}
