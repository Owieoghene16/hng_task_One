const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let month = days[d.getDay()];
document.getElementById("day").innerHTML = month;

const utcTime = d.getUTCMilliseconds();
document.getElementById("time").innerHTML = utcTime;
console.log(utcTime)