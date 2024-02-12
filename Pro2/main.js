const input = document.getElementById('inputtext');
const button = document.querySelectorAll('button');
function operation(button){
    if(button == 'C'){
        input.value = '';
    }
    else if(button == 'DEL'){
        input.value = input.value.slice(0,-1);
    }
    else if(button == '='){
        input.value = calculate(input.value);
    }
    else {
        input.value += buttonValue;
    }
}
function calculate(experation){
    console.log(experation);
    try{
    return new Function('return'+experation)();
    } catch(error){
        return
    }
}