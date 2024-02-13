const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = '';
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}














/*const input = document.getElementById('inputtext');
let button = document.querySelectorAll('button');
//new js code
let operand1 = '';
let operand2 = '';
let operation = '';
function calculator(a, b, operation) {
    switch(operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if(b != 0) {
                return a / b;
            }else {
                return 'Error: Division by zero is not allowed';
            }
        default:
            return 'Error: Operation not supported';
    }
}
//c,del,= buttons use
function operation(buttonValue){
    if(buttonValue === 'C'){
        input.value = '';
    }
    else if(buttonValue === 'DEL'){
        input.value = input.value.slice(0,-1);
    }
    else if(buttonValue === '='){
        input.value = calculate(input.value);
    }
    else if(buttonValue === '+','-','*','/'){
        operation     
    }
    else {
        input.value += buttonValue;
    }
}
//onclick it call operation() function
button.forEach(button  => {
    let buttonValue = button.innerText;
    button.addEventListener('click',function(){
        operation(buttonValue)});
});

//old js code
/*function calculate(expression){
    console.log(expression);
    console.log(typeof(expression));
    try{
        return new Function('return'+expression)();
    } catch(error){
        return 'Malformed operation';
    }
}

// Usage:
//console.log(calculator(5, 3, 'add'));      // Outputs: 8
//console.log(calculator(5, 3, 'subtract')); // Outputs: 2
//console.log(calculator(5, 3, 'multiply')); // Outputs: 15
//console.log(calculator(5, 3, 'divide'));   // Outputs: 1.6666666666666667
*/