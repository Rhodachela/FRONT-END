// Variables for the buttons
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables for Time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for Leading Zeros

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Stop Watch Function

function stopWatch() {

    seconds ++;
    
    if (seconds === 60){
        seconds = 0;
        minutes ++;

        if (minutes === 60){
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }
    // Leading Minutes
     if (minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }
    // Leading Hours
     if (hours < 10){
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = 
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// window.setInterval(stopWatch, 1000);