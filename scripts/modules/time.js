const allTimeInSec = document.getElementById('allTimeInSec');
const timeInYears = document.getElementById('timeInYears');
const timeInMonths = document.getElementById('timeInMonths');
const timeInDays = document.getElementById('timeInDays');
const timeInHours = document.getElementById('timeInHours');
const timeInMinutes = document.getElementById('timeInMin');
const timeInSeconds = document.getElementById('timeInSec');
const timeSince = new Date('2021, 8, 20'); // time since start coding

export function updateTime() {
    const totalSecs = Math.floor((Date.now() - timeSince) / 1000);

    const timeInSec = totalSecs;
    const timeInYr = Math.floor(timeInSec / 31536000);
    const timeInMths = Math.floor((timeInSec % 31536000) / 2628000);
    const timeInday = Math.floor(((timeInSec % 31536000) % 2628000) / 86400);
    const timeInHrs = Math.floor((((timeInSec % 31536000) % 2628000) % 86400) / 3600);
    const timeInMin = Math.floor(((((timeInSec % 31536000) % 2628000) % 86400) % 3600) / 60);
    const timeInSecs = Math.floor((((((timeInSec % 31536000) % 2628000) % 86400) % 3600) % 60) / 1);

    allTimeInSec.innerHTML = timeInSec;
    timeInYears.innerHTML = timeInYr;
    timeInMonths.innerHTML = timeInMths;
    timeInDays.innerHTML = timeInday;
    timeInHours.innerHTML = timeInHrs;
    timeInMinutes.innerHTML = timeInMin;
    timeInSeconds.innerHTML = timeInSecs;
    return timeInSec;
}