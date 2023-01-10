let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');


// Select all buttons → add event listener for appropriate buttons
buttons.forEach(buttonClick);






// --------------------------------- FUNCTIONS -------------------------------------
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '/') {
        return add(a, b);
    }

    if (operator === '-') {
        return subtract(a, b);
    }

    if (operator === 'x') {
        return multiply(a, b);
    }

    if (operator === '/') {
        return divide(a, b);
    }
}

function buttonClick(button) {
    button.addEventListener('click', () => {
        if (button.classList[0] === 'clear'){
            display.textContent = '';
        } else if (button.classList[0] === 'delete'){
            display.textContent = display.textContent.slice(0,(display.textContent.length - 1));
        } else if (button.classList[0] === 'one'){
            display.textContent += '1';
        } else if (button.classList[0] === 'two'){
            display.textContent += '2';
        } else if (button.classList[0] === 'three'){
            display.textContent += '3';
        } else if (button.classList[0] === 'four'){
            display.textContent += '4';
        } else if (button.classList[0] === 'five'){
            display.textContent += '5';
        } else if (button.classList[0] === 'six'){
            display.textContent += '6';
        } else if (button.classList[0] === 'seven'){
            display.textContent += '7';
        } else if (button.classList[0] === 'eight'){
            display.textContent += '8';
        } else if (button.classList[0] === 'nine'){
            display.textContent += '9';
        } else if (button.classList[0] === 'zero'){
            display.textContent += '0';
        } else if (button.classList[0] === 'decimal'){
            if (display.textContent.includes('.')){ // Check if already have decimal
                return;
            } else {
                display.textContent += '.';
            }
        }
    })
}