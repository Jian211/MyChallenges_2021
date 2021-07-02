const body = document.querySelector("body");
const h1 = document.createElement("h1");

body.appendChild(h1).innerText = "Hello!";
body.style.color = "white"
body.style.background = "purple";

console.dir(window.document)

function handleResize(){
    if(500 > window.innerWidth){
        body.style.background = "skyblue";
    }else if(500 <= window.innerWidth && window.innerWidth < 1000){
        body.style.background = "purple";
    }else{
        body.style.background = "yellow";
    }
}
window.addEventListener("resize", handleResize);