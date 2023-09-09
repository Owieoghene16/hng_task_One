const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let month = days[d.getDay()];
document.getElementById("day").innerHTML = month;

const displayUTCTime = () => {
    const utcTime = document.getElementById('time');
    const currentTime = new Date().getTime();
    utcTime.textContent = ` ${currentTime}`;
}

displayUTCTime();
setInterval(displayUTCTime, 1000);
