let firstNum = +prompt("Enter the first number", "");
let secondNum = +prompt ("Enter the second number", "");
let action = prompt ("Enter the mathematical action (+, -, * or /)", "");
let result = 1;

if (action === '+') {
 result = getSum();
} 
    else if (action === '-') {
    result = getDif();
    } 
        else if (action === '*') {
        result = getProduct();
        } 
           else if (action === '/') {
            result = getQoutient();
            } 

function getSum() {
    return firstNum + secondNum;
    };

function getDif() {
    return firstNum - secondNum;
    };

function getProduct() {
    return firstNum * secondNum;
    };

function getQoutient() {
    return firstNum / secondNum;
    };


console.log(`${firstNum} ${action} ${secondNum} = ${result}`)

// console.log(typeof firstNum, typeof secondNum, typeof result);