let breakPlease = document.getElementById("breakPlease").innerHTML = 5;
let startingMinutes = 25;
let time = startingMinutes * 60;
let isBreak = false;

alert("25 + 5 Clock, also known as Pomodoro's technique, is a time management method. Most efficient way to manage the work/rest time is to work for 25 minutes, then rest for 5 minutes.");

function increaseBreak() {
  if (breakPlease < 60) {
  document.getElementById('breakPlease').innerHTML = ++breakPlease;
  }
};

function decreaseBreak() {
  if (breakPlease >= 2) {
  document.getElementById('breakPlease').innerHTML = --breakPlease;
  }
};


function increaseSession() {
  if (startingMinutes < 60) {
  document.getElementById('timeItself').innerHTML = ++startingMinutes;
  time = startingMinutes * 60;
  }
};

function decreaseSession() { 
   if (startingMinutes >= 2) {
   document.getElementById('timeItself').innerHTML = --startingMinutes;
   time = startingMinutes * 60;
  }
};

const countdownEl = document.getElementById('countdown');

let interval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutesLeft = Math.floor(time / 60);
  let secondsLeft = time % 60;
  
  if (minutesLeft === 0 && secondsLeft === 0) {
      isBreak = !isBreak;
      time = (isBreak ? breakPlease : startingMinutes) * 60;
      console.log(isBreak ? 'break' : 'work', 'start with', time);
  }
  
  secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
  
  countdownEl.innerHTML = `${minutesLeft}:${secondsLeft}`;
  time--;
 
};

 function startStop() {
    if (interval === null) {
        interval = setInterval(updateCountdown, 1000);
      } else {
        clearInterval(interval);
        interval = null;
      }
      console.log('sAS clicked')
 };
 



function resetTime() {
  console.log('rT clicked')
  startingMinutes = 25;
  time = startingMinutes * 60;
  if (interval == null) {
    updateCountdown();
  }
};