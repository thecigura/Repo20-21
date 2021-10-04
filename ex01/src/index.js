let buttons = document.querySelectorAll('.button');
let buttonsAsl = buttons
let display = document.querySelector('.textarea');
let para = document.createElement('p');
let span = document.createElement('span');
let shifts = document.querySelectorAll('.shift');

display.appendChild(para);
para.appendChild(span);
buttons.forEach((button) => {
    button.addEventListener('click', write);
    function write() {
        para.appendChild(span);
        span.textContent += button.innerHTML;
   } 
});


let capsLock = document.querySelector('.capsLock');
capsLock.addEventListener('click', capLetter);
let light = document.querySelector('.light');
let isOn = true;
function capLetter() {
    capsLock.classList.toggle('capsLock-on');
    span = document.createElement('span');
    para.appendChild(span);

    if (isOn) {
        span.style.textTransform = 'uppercase';
        isOn = false;

    } else {
        span.style.textTransform = 'lowercase';
        isOn = true;
    }
}


let enterButton = document.querySelector('.enter');
enterButton.addEventListener('click', nextLine);
function nextLine() {
    para = document.createElement('p');
    span = document.createElement('span');
    display.appendChild(para);
    para.appendChild(span);
}

let space = document.querySelector('.space');
space.addEventListener('click', writeSpace);
function writeSpace() {
    span.innerHTML += '&nbsp; ';
}


let openCloseKeyboardButton = document.querySelector('.toggle-keyboard');
openCloseKeyboardButton.addEventListener('click' , openCloseKeyboard);
let container = document.querySelector('.container');
let openCloseButton = document.querySelector('.toggle-keyboard');
let isClosed = true;

function openCloseKeyboard(){
    container.classList.toggle('open');
  if(isClosed){
    openCloseButton.innerHTML = 'Close keyboard';
    isClosed = false;
  } else{
    openCloseButton.innerHTML = 'Open keyboard';
    isClosed = true;
  }
}