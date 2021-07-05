const openDiv = document.querySelector("body div");
const generateNumber = document.querySelector("h3 input");
const guessNumber = document.querySelector("h4 input");
const playBtn = document.querySelector("h4 button");
const firSpan = document.querySelector("div p span:first-child");
const secSpan = document.querySelector("div p span:last-child");
const textInfo = document.querySelector("div p:last-child span");
 
let rangeValue;  
let userGuessNum;

// Get generate Value.
generateNumber.addEventListener("input", (e) => rangeValue = e.target.value);

// Get user Value.
guessNumber.addEventListener("input", (e) => userGuessNum = parseInt(e.target.value, 10));

// Get random Value function.
function randomValue(value){    return Math.floor(Math.random()*value);   } 

// Result.
const result = () => {
    const rdValue = randomValue(rangeValue);

    firSpan.innerText = userGuessNum;
    secSpan.innerText = rdValue;

    if(rdValue === userGuessNum) textInfo.innerText = " Won!"; 
    if(rdValue !== userGuessNum) textInfo.innerText = " Lost!"; 
        
    openDiv.classList.remove("close");
}

playBtn.addEventListener("click", result);
