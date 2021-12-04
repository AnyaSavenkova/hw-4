let firstNum = +prompt("Enter the first number", "");
let secondNum = +prompt ("Enter the second number", "");
let action = prompt ("Enter the mathematical action (+, -, * or /)", "");
let result = 1;

if (action === '+') {
 result = getSum(firstNum, secondNum);
} 
    else if (action === '-') {
    result = getDif(firstNum, secondNum);
    } 
        else if (action === '*') {
        result = getProduct(firstNum, secondNum);
        } 
           else if (action === '/') {
            result = getQoutient(firstNum, secondNum);
            } 

function getSum(first, second) {
    return first + second;
    };

function getDif(first, second) {
    return first - second;
    };

function getProduct(first, second) {
    return first * second;
    };

function getQoutient(first, second) {
    return first / second;
    };


console.log(`${firstNum} ${action} ${secondNum} = ${result}`)

