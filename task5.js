const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    if (num2 === 0) {
        return "Infinite...";
    }
    return num1 / num2;
}

const calculate = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}

// const a = parseFloat(prompt("value a"));
// const b = parseFloat(prompt("value b"));
// const c = prompt("(+, -, *, /):");

console.log(calculate(6, 4, "+"));
console.log(calculate(6, 4, "-"));
console.log(calculate(6, 4, "*"));
console.log(calculate(6, 4, "/"));
