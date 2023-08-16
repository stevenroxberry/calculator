let previousValue = "";
let currentValue = "";
let operator = "";


//get value of button hit
//display that num in textinput and add to the equestion.


//create events for each button
document.addEventListener("DOMContentLoaded", () => {
    let textInput = document.querySelector('.input-text');
    let answer = document.getElementById('answer');
    
    let numbers = document.querySelectorAll('.btnNumber');
    let operations = document.querySelectorAll('.btnOperator');
    let equalsBtn = document.querySelector('.btnEquals');
    let clearBtn = document.querySelector('.btnClear');
    let deleteBtn = document.querySelector('.btnDelete');
    let intBtn = document.querySelector('.btnInt');

    //handles each number, add numbers to tect input
    numbers.forEach((number) => number.addEventListener('click', function(e){
        //sets current and previous values with handleNumber , checks length, and then adds it input text
        handleNumber(e.target.textContent);
        textInput.textContent = currentValue;
        //this is for the third digit. operator sets current value to previous value
        //this makes it a statement
        textInput.textContent = previousValue + " " + operator + " " + currentValue;
    }));

    //handles the operators button. sets the current operator with button selecting for the equation
    operations.forEach((op) => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent);
        textInput.textContent = previousValue + " " + operator;
    }));

    //set everything to nothing
    clearBtn.addEventListener('click', function(e){
        textInput.textContent = '';
        currentValue = '';
        previousValue = '';
        operator = ''; 
        answer.textContent = '';
    })

    //when selected, called operation which handles the math
    equalsBtn.addEventListener('click', function(e){
        answer.textContent = operation();
        currentValue = operation();
    })

    //delete the last number, using splice
    deleteBtn.addEventListener('click', function(e){
        currentValue = currentValue.slice(0, -1);
        console.log(currentValue)
        textInput.textContent = previousValue + " " + operator + " " + currentValue;
    })

    intBtn.addEventListener('click', function(e){
        negativeNum(currentValue);
        console.log(currentValue);
    })
})

function handleNumber(number){
    if(currentValue.length <= 15){
        currentValue += number;
    }
}

//sets current value to previous value, so we can create an equation with two values with operator selected
function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = " ";
}

//handles the math operations
function operation(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === '+'){
        return round(previousValue + currentValue);
    } else if(operator === '-'){
        return round(previousValue - currentValue);
    } else if(operator === '*'){
        return round(previousValue * currentValue);
    } else if(operator === '/'){
        return round(previousValue / currentValue);
    }
}

//rounds result to three decimals
function round(num){
    return Math.round(num * 1000)/1000;
}