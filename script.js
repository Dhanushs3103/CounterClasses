let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let interval;
let currentValue = parseInt(display.innerText);
start.addEventListener("click", () => {
    interval = setInterval(() => {
        
        
        if (currentValue < 9) {
            currentValue++;
            display.innerText = currentValue < 10 ? `0${currentValue}` : `${currentValue}`;
        } else {
            currentValue++;
            display.innerText = `${currentValue}`;
        }
    }, 1000);
});


stop.addEventListener("click", () => {
    clearInterval(interval);
})

increment.addEventListener("click", () => {
    if(currentValue < 9) {
        currentValue++;
        display.innerText = `0${currentValue}`;
    }
    else {
        currentValue++;
        display.innerText = currentValue;
    }
    
})

decrement.addEventListener("click", () => {
    if(currentValue <= 0) {
        display.innerText = `00`;
       }
    else if (currentValue < 10) {
        currentValue--;
        display.innerText = `0${currentValue}`;
       }
   else {
       currentValue--;
       display.innerText = currentValue;
   }
})

reset.addEventListener("click", () => {
    currentValue = 0;
    display.innerText = `00`;
})