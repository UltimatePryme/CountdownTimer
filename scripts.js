const daysEL = document.getElementById("days")
const hoursEL = document.getElementById("hours")
const minutesEL = document.getElementById("minutes")
const secondsEL = document.getElementById("seconds")

function countdown() {
    const newDate = new Date("Jan 1, 2023");
    const now = new Date();
    const timeLeft = (newDate - now)

    var days = Math.floor(timeLeft/(1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    daysEL.innerHTML= formatTime(days);
    hoursEL.innerHTML= formatTime(hours);
    minutesEL.innerHTML= formatTime(minutes);
    secondsEL.innerHTML= formatTime(seconds);
   
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown()

setInterval(countdown, 1000)



