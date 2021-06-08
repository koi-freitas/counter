// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener("click", function (event) {
        const variable = event.currentTarget.classList;
        if(variable.contains('decrease')){
            count--;
        }
        else if(variable.contains('increase')){
            count++;
        }
        else if(variable.contains('reset')){
            count = 0;
        }
        else if(variable.contains('default-value')){
            count = prompt('Type new value!');
            if(count === ''){
                count = 0;
            }
            else if(isNaN(count)){
                count = 0;
            }
            else if(count === null){
                count = 0;
            }
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = '#222'
        }
        value.textContent = count;
    });
});