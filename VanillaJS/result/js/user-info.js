const loginForm    = document.querySelector(".login-form");
const loginLabel   = document.querySelector(".login-form label");
const loginInput   = document.querySelector("#login-id");
const loginWelcome = document.querySelector(".welcome-text"); 

const handleUserId = (event) =>{    event.preventDefault();
    //Step1     save user Id to localStorage.
    const userId = loginInput.value;
    localStorage.setItem("id", JSON.stringify(userId));

    //Step2     Hide login Form and Show user The Welcome Text.
    loginForm.classList.add("hide");
    // getStorageId === ${userId}
    const getStorageId = JSON.parse(localStorage.getItem("id"));
    loginWelcome.innerHTML = `${getStorageId}様、こんばんは！`;
}
loginLabel.addEventListener("click", handleUserId);