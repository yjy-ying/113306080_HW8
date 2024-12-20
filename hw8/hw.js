document.getElementById('calculate').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultDisplay = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = 'Result = Invalid input';
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            if (num2 === 0) {
                resultDisplay.textContent = 'Result = Division by zero error';
                return;
            }
            result = divide(num1, num2);
            break;
        default:
            resultDisplay.textContent = 'Result = Invalid operation';
            return;
    }

    resultDisplay.textContent = `Result = ${result.toFixed(2)}`;
});

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
