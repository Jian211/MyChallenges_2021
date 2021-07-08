const mainBody         = document.querySelector("body");
const nowTimeContainer = document.querySelector("h2");
const CHRISMAS = new Date(2021, 11, 25, 23, 59, 59); 

const clock = () => {
    const nowTime = new Date();
    const reDate = 359 - 30 * (nowTime.getMonth()+1)+4;
    const reHour = CHRISMAS.getHours() - nowTime.getHours();
    const reMint = CHRISMAS.getMinutes() - nowTime.getMinutes();  
    const reSec = CHRISMAS.getSeconds() - nowTime.getSeconds();
    nowTimeContainer.innerText = `${reDate}d ${reHour}h ${reMint}m ${reSec}s`
}    
setInterval(clock, 1000);