const zeroBtn = document.querySelector('#btn0');
const oneBtn = document.querySelector('#btn1');
const twoBtn = document.querySelector('#btn2');
const threeBtn = document.querySelector('#btn3');
const fourBtn = document.querySelector('#btn4');
const fiveBtn = document.querySelector('#btn5');
const sixBtn = document.querySelector('#btn6');
const sevenBtn = document.querySelector('#btn7');
const eightBtn = document.querySelector('#btn8');
const nineBtn = document.querySelector('#btn9');
const textInput = document.getElementById('input');

//get value of button hit
//display that num in textinput and add to the equestion.
zeroBtn.addEventListener('click', () => {
    console.log(zeroBtn.value);
    textInput.innerHTML = zeroBtn.value;
});
