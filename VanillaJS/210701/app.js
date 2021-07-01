const h1 = document.querySelector("h1");
const colorList = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const superEventHandler = {
    handleMouseEnter: () => {
        h1.innerText = "The mouse is here!";
        h1.style.color = colorList[0];
    },
    handleMouseLeave : () => {
        h1.innerText = "The mouse is gone!";
        h1.style.color = colorList[1];
    },
    handleResize : () => {
        h1.innerText = "You just resized!";
        h1.style.color = colorList[2];
    },
    handleContextmeun : () => {
        h1.innerText = "That was a right Click!";
        h1.style.color = colorList[3];
    }
};
h1.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h1.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContextmeun);