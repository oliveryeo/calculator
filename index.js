let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let firstNumber = 0;
let secondNumber = 0;
let firstOperator = '';
let secondOperator = '';
let displayClear = false;
let displayInput = false; // Checker for operator spamming
let equalOperator = false;

const display = document.querySelector('.display');
const tracker = document.querySelector('.tracker');
const buttons = document.querySelectorAll('button');


// Select all buttons → add event listener for appropriate buttons
buttons.forEach(buttonClick);



// --------------------------------- FUNCTIONS -------------------------------------
function operate(operator, a, b) {
    if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else if (operator === '*') {
        return a * b;
    } else if (operator === '/') {
        // Return NaN if trying to divide by 0
        if (b === 0) return NaN;
        return a / b;
    }
}

function buttonClick(button) {
    button.addEventListener('click', () => {
        // Clear or Delete functions
        if (button.classList[0] === 'clear'){
            clearDisplay();
        } else if (button.classList[0] === 'delete'){
            display.textContent = display.textContent.slice(0,(display.textContent.length - 1));
        }

        // Clear the display once an operator is activated
        if (displayClear === true) {
            display.textContent = '';
            displayClear = false;
        }

        if (button.classList[0] === 'one'){
            display.textContent += '1';
            displayInput = true;
        } else if (button.classList[0] === 'two'){
            display.textContent += '2';
            displayInput = true;
        } else if (button.classList[0] === 'three'){
            display.textContent += '3';
            displayInput = true;
        } else if (button.classList[0] === 'four'){
            display.textContent += '4';
            displayInput = true;
        } else if (button.classList[0] === 'five'){
            display.textContent += '5';
            displayInput = true;
        } else if (button.classList[0] === 'six'){
            display.textContent += '6';
            displayInput = true;
        } else if (button.classList[0] === 'seven'){
            display.textContent += '7';
            displayInput = true;
        } else if (button.classList[0] === 'eight'){
            display.textContent += '8';
            displayInput = true;
        } else if (button.classList[0] === 'nine'){
            display.textContent += '9';
            displayInput = true;
        } else if (button.classList[0] === 'zero'){
            display.textContent += '0';
            displayInput = true;
        } else if (button.classList[0] === 'decimal'){
            if (display.textContent.includes('.')){ // Check if already have decimal
                return;
            } else {
                display.textContent += '.';
                displayInput = true;
            }
        }
        
        // Operator logic: Store 2nd number → operate() on firstNumber and secondNumber with firstOperator → Reassign firstOperator with secondOperator → display accumulated result

        // If firstNumber and firstOperator does not exist, assign them with current display input.

        if (button.classList[0] === '+'){
            runOperation('+');
        } else if (button.classList[0] === '-'){
            runOperation('-');
        } else if (button.classList[0] === '/'){
            runOperation('/');
        } else if (button.classList[0] === '*'){
            runOperation('*');
        } else if (button.classList[0] === '='){
            runOperation('=');
        }

        // Prevent overflowing of display text
        if (display.textContent.length === 24){
            display.textContent = display.textContent.slice(0,(display.textContent.length - 1));
        }
    });
}

function clearDisplay() {
    display.textContent = '';
    tracker.textContent = '';
    firstNumber = 0;
    secondNumber = 0;
    firstOperator = '';
    secondOperator = '';
}

function runOperation(operator) {
    if (displayInput === false && equalOperator == false) return; // Avoid operator spamming

    displayInput = false; // Reset everytime the function is run

    if (firstOperator === '') {
        firstNumber = parseFloat(display.textContent);
        firstOperator = operator;

        // Display divide symbol
        if (operator === "/"){
            tracker.textContent = `${firstNumber} ÷`;
        } else if (operator === "=") {
            tracker.textContent = `${firstNumber}`;
        } else {
            tracker.textContent = `${firstNumber} ${firstOperator}`;
        }

        displayClear = true; 
        
    } else if (operator !== "=") {
        secondNumber = parseFloat(display.textContent);
        secondOperator = operator;    
        // Run the operation
        firstNumber = operate(firstOperator, firstNumber, secondNumber)

        // Reset everything if trying to divide by 0
        if (Number.isNaN(firstNumber)){
            display.textContent = `trololol`;
            tracker.textContent = `trololol`;
            firstNumber = 0;
            secondNumber = 0;
            firstOperator = '';
            secondOperator = '';
            displayClear = true; // make sure to reset the display
            return;
        }

        // Reassign operator
        firstOperator = secondOperator;

        // Display content
        display.textContent = `${firstNumber}`;
        if (operator === "/"){
            tracker.textContent = `${firstNumber} ÷`;
        } else {
            tracker.textContent = `${firstNumber} ${firstOperator}`;    
        }
        displayClear = true;
    } else {
        secondNumber = parseFloat(display.textContent);
        secondOperator = '';    
        // Run the operation
        firstNumber = operate(firstOperator, firstNumber, secondNumber);
        // Reassign operator
        firstOperator = secondOperator;

        // Display content
        display.textContent = `${firstNumber}`;
        tracker.textContent = `${firstNumber}`;
        displayInput = true; // Do not reset so the boolean can be selected again
    }
}