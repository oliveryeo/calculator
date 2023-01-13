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

        // If you click a number after an equal operator function, reset the number.
        if (button.classList[0] === '1'){
            if (equalOperator === true) resetVariables();
            display.textContent += button.classList[0];
            displayInput = true;
        } else if (button.classList[0] === '2'){
            if (equalOperator === true) resetVariables();
            display.textContent += button.classList[0];
            displayInput = true;
        } else if (button.classList[0] === '3'){
            if (equalOperator === true) resetVariables();
            display.textContent += button.classList[0];
            displayInput = true;
        } else if (button.classList[0] === '4'){
            if (equalOperator === true) resetVariables();
            display.textContent += button.classList[0];
            displayInput = true;
        } else if (button.classList[0] === '5'){
            if (equalOperator === true) resetVariables();
            display.textContent += button.classList[0];
            displayInput = true;
        } else if (button.classList[0] === '6'){
            if (equalOperator === true) resetVariables();
            display.textContent += button.classList[0];
            displayInput = true;
        } else if (button.classList[0] === '7'){
            if (equalOperator === true) resetVariables();
            display.textContent += button.classList[0];
            displayInput = true;
        } else if (button.classList[0] === '8'){
            if (equalOperator === true) resetVariables();
            display.textContent += button.classList[0];
            displayInput = true;
        } else if (button.classList[0] === '9'){
            if (equalOperator === true) resetVariables();
            display.textContent += button.classList[0];
            displayInput = true;
        } else if (button.classList[0] === '0'){
            if (equalOperator === true) resetVariables();
            display.textContent += button.classList[0];
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
    function resetVariables() {
        display.textContent = '';
        equalOperator = false;
        firstNumber = 0;
        firstOperator = '';
    }
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
    if (displayInput === false) return; // Avoid operator spamming

    if (operator !== "="){
        if (firstOperator === '') {
            firstNumber = parseFloat(display.textContent);
            firstOperator = operator;
            // Display divide symbol
            if (operator === "/"){
                tracker.textContent = `${firstNumber} ÷`;
            } else {
                tracker.textContent = `${firstNumber} ${firstOperator}`;
            }
            displayClear = true; 
            displayInput = false; // Reset everytime the function is run
            equalOperator = false; // set to false whenever a non-equal operator is run
    
        } else {
            secondNumber = parseFloat(display.textContent);
            secondOperator = operator;
            if (equalOperator !== true){ // Skip if equalOperator was run once to prevent accidental calculation and to reset the firstOperator variable after equality function invokation. secondNumber variable will not be utilized in this instance.
                // Run the operation
                firstNumber = operate(firstOperator, firstNumber, secondNumber);
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
            displayInput = false; // Reset everytime the function is run
            equalOperator = false; // set to false whenever a non-equal operator is run
    
        }
    } else {
        if (equalOperator === true) return; // avoid equal operator spamming
        if (firstOperator === '') {
            firstNumber = parseFloat(display.textContent);
            tracker.textContent = `${firstNumber}`;
            equalOperator = true;
        } else {
            secondNumber = parseFloat(display.textContent);
            firstNumber = operate(firstOperator, firstNumber, secondNumber);
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
            display.textContent = `${firstNumber}`;
            tracker.textContent = `${firstNumber}`;
            equalOperator = true;
        }
    }
}