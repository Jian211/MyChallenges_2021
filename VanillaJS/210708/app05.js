const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];
const bodyBg    = document.querySelector("body");
const handleBtn = document.querySelector("button");

const randomValue = () => Math.floor(Math.random() * colors.length);

const handleColors = () => {
    const firstNum = colors[randomValue()];
    const secNum   = colors[randomValue()];
    if(firstNum === secNum) return handleColors();
    if(firstNum !== secNum) bodyBg.style.background = `linear-gradient(to right, ${firstNum}, ${secNum})`;
}

handleBtn.addEventListener("click", handleColors);

