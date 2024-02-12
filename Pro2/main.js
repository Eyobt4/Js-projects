const input = document.getElementById('inputtext');
const button = document.querySelectorAll('button');
function calculate(expression){
    console.log(expression);
    console.log(typeof(expression));
    try{
        return new Function('return'+expression)();
    } catch(error){
        return 'Malformed operation';
    }
}
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
    else {
        input.value += buttonValue;
    }
}
button.forEach(button  => {
    let buttonValue = button.innerText;
    button.addEventListener('click',function(){
        operation(buttonValue)});
});