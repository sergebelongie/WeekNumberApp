// script.js

document.addEventListener('DOMContentLoaded', function() {
    let date = new Date();
    let weekNumber = getWeekNumber(date);
    document.getElementById('weekNumber').innerText = 'Week ' + weekNumber;
});

function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    let weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNo;
}
