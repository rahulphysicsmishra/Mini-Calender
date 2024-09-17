const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNum = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();
monthName.innerHTML = date.toLocaleString("en", {month:"long"})

dayName.innerHTML = date.toLocaleString("en", {weekday:"long"})

dayNum.innerHTML = date.toLocaleString("en", {day:"2-digit"})

year.innerHTML = date.toLocaleString("en", {year: "numeric"})


