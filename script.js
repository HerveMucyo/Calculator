let currentDisplay = "0";
let operator = "";
let result = 0;

function updateDisplay() {
    document.getElementById("display").textContent = currentDisplay;
}

function clearDisplay() {
    currentDisplay = "0";
    result = 0;
    operator = "";
    updateDisplay();
}

function appendNumber(number) {
    if (currentDisplay === "0" || currentDisplay === "Error") {
        currentDisplay = number.toString();
    } else {
        currentDisplay += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (currentDisplay !== "Error") {
        if (operator !== "") {
            calculate();
        }
        operator = op;
        result = parseFloat(currentDisplay);
        currentDisplay = "0";
    }
}

function calculate() {
    if (operator === "+") {
        result += parseFloat(currentDisplay);
    } else if (operator === "-") {
        result -= parseFloat(currentDisplay);
    } else if (operator === "*") {
        result *= parseFloat(currentDisplay);
    } else if (operator === "/") {
        if (parseFloat(currentDisplay) === 0) {
            currentDisplay = "Error";
            updateDisplay();
            return;
        }
        result /= parseFloat(currentDisplay);
    } else if (operator === "%") {
        result %= parseFloat(currentDisplay);
    } else if (operator === "√") {
        result = Math.sqrt(parseFloat(currentDisplay));
    } else if (operator === "^") {
        result = Math.pow(result, parseFloat(currentDisplay));
    }

    currentDisplay = result.toString();
    operator = "";
    updateDisplay();
}

function appendDecimal() {
    if (!currentDisplay.includes(".")) {
        currentDisplay += ".";
        updateDisplay();
    }
}

function deleteLastCharacter() {
    currentDisplay = currentDisplay.slice(0, -1);
    if (currentDisplay === "") {
        currentDisplay = "0";
    }
    updateDisplay();
}