let breakLength = document.getElementById("break-length");
let sessionLength = document.getElementById("session-length");
let startStopButton = document.getElementById("start_stop");
let resetButton = document.getElementById("reset");
let timeLeft = document.getElementById("time-left");
let timer;
let timerStatus = "begin";

startStopButton.addEventListener("click", () => {
    if (timerStatus === "begin" || timerStatus === "stopped") {
        // Start the timer
        console.log("start the timer");
        timerStatus = "counting";
        timer = setInterval(() => {
            timeLeft.innerText = decrementTime(timeLeft.innerText);
        }, 1000);

    } else if (timerStatus === "counting") {
        // Stop the timer
        console.log("stop the timer");
        timerStatus = "stopped";
        clearInterval(timer);
    }
});

resetButton.addEventListener("click", () => {
    console.log("reset button clicked");
    clearInterval(timer);
    timeLeft.innerText = "25:00";
    sessionLength.innerText = "25";
    breakLength.innerText = "5";
});

function decrementTime(timeString) {
    let timeDisplay = timeString.split(":");
    let minuteDisplay = parseInt(timeDisplay[0]);
    let secondDisplay = parseInt(timeDisplay[1]);

    secondDisplay -= 1;

    if (secondDisplay === -1) {
        secondDisplay = 59;
        minuteDisplay -= 1;
    }

    if (secondDisplay <= 9) {
        secondDisplay = "0" + secondDisplay;
    }

  
    return minuteDisplay + ":" + secondDisplay;  
};


function incrementBreak() {
    if (parseFloat(breakLength.innerText) < 60) {     
       breakLength.innerText = parseFloat(breakLength.innerText) + 1;      
    }
};

function decrementBreak() {
    if (parseFloat(breakLength.innerText) > 0) {
        breakLength.innerText = parseFloat(breakLength.innerText) - 1;      
    }
};

function incrementSession() {
    if (parseFloat(sessionLength.innerText) < 60) {
       let incrementSessionValue = parseFloat(sessionLength.innerText) + 1;
       sessionLength.innerText = incrementSessionValue;
       timeLeft.innerText = incrementSessionValue + ":00";
    }
};

 function decrementSession() {
    if (parseFloat(sessionLength.innerText) > 0) {
       let decrementSessionValue = parseFloat(sessionLength.innerText) - 1;
       sessionLength.innerText = decrementSessionValue;
       timeLeft.innerText = decrementSessionValue + ":00";
    }
};