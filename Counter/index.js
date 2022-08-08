const increasebtn = document.getElementById('increase');
const resetbtn = document.getElementById('reset');
const decreasebtn = document.getElementById('decrease');
const num = document.getElementById('num');
let number = 0;




increasebtn.addEventListener('click', function() {
    number += 1;
    num.textContent = number;
    if (number>0) {
        num.style.color = 'green';
    };  
})

decreasebtn.addEventListener('click', function() {
    number -= 1;
    num.textContent = number;
    if (number<0) {
        num.style.color = 'red';
    };  
})

resetbtn.addEventListener('click', function() {
    number = 0;
    num.textContent = 0;
    if (number=0) {
        num.style.color = 'black';
    };  
})