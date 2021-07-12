const loginForm    = document.querySelector(".login-form");
const loginLabel   = document.querySelector(".login-form label");
const loginInput   = document.querySelector("#login-id");
const loginWelcome = document.querySelector(".welcome-text"); 

const sayHello = ()=> {
    loginForm.classList.add("hide");
    const getStorageId = JSON.parse(localStorage.getItem("id"));
    loginWelcome.innerHTML = `${getStorageId}様、こんばんは！`;
}

const handleUserId = (event) =>{    
    event.preventDefault();    
    const userId = loginInput.value;
    localStorage.setItem("id", JSON.stringify(userId));
    sayHello();
}

if(localStorage.getItem("id")){     sayHello()     };
loginLabel.addEventListener("click", handleUserId);