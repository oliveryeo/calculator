let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let firstNumber = 0;
let secondNumber = 0;
let firstOperator = '';
let secondOperator = '';
let displayClear = false;
let displayInput = false; // Checker for operator spamming

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
        return a / b;
    }
}

// If display is populated, empty it before populating it again with the second value ONLY after pressing the number

// Store 2nd number → Operate on first and second number with first operator → Store first operator as second operator → display accumulated result

function buttonClick(button) {
    button.addEventListener('click', () => {
        // Clear the display once an operator is activated
        if (displayClear === true) {
            display.textContent = '';
            displayClear = false;
        }

        if (button.classList[0] === 'clear'){
            clearDisplay();
        } else if (button.classList[0] === 'delete'){
            display.textContent = display.textContent.slice(0,(display.textContent.length - 1));
        } else if (button.classList[0] === 'one'){
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
        } else if (button.classList[0] === 'add'){
            if (displayInput === false) return; // Avoid operator spamming

            if (firstNumber === 0 && firstOperator === '') {
                firstNumber = parseFloat(display.textContent);
                firstOperator = '+';
                tracker.textContent = `${firstNumber} ${firstOperator}`;
                displayClear = true;
                displayInput = false;
            } else {
                secondNumber = parseFloat(display.textContent);
                secondOperator = '+';

                // Run the operation
                firstNumber = operate(firstOperator, firstNumber, secondNumber);

                // Reassign operator
                firstOperator = secondOperator;

                // Display content
                display.textContent = `${firstNumber}`;
                tracker.textContent = `${firstNumber} ${firstOperator}`;
                displayClear = true;
                displayInput = false;
            }
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