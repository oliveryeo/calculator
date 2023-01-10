let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');


// Select all buttons → 
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
        }
    })
}