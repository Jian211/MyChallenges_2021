// Mark in the .clockDate > year,month,date  
const clockDate      = document.querySelector(".clock__date");
clockDate.innerText = `${new Date().getFullYear()}年${new Date().getMonth()}月${new Date().getDate()}日`;

// Mark in the .clockTimes > hour, mint, sec
const clockTimes     = document.querySelector(".clock__times");
setInterval(() => clockTimes.innerText = `${new Date().getHours()}時${new Date().getMinutes()}分${new Date().getSeconds()}秒`, 1000);