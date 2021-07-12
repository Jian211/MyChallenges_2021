const todoGetInput = document.querySelector(".to-do__getLists input"); 
const todoGetLabel = document.querySelector(".to-do__getLists label");
const todoSetLists = document.querySelector(".to-do__setLists");

//For make todo List.
let idValue = 1;

const todoLists = [];
const completList = [];

const handleTodoLists = (event) => {    
    event.preventDefault();
    
    const todoInputValue = todoGetInput.value;
    // save to web storage.
    todoLists.push(todoInputValue);
    localStorage.setItem("todo",JSON.stringify(todoLists));

    // make todo Form and show
    makeTodoList(todoInputValue);
}



const makeTodoList = ( todoInputValue ) =>{
    const addSetForm  = document.createElement("p");
    const addSetX     = document.createElement("span")

    let todoNum = idValue++;
    addSetForm.classList.add("to-do__setLists__part");
    addSetForm.setAttribute("id", `todo${todoNum}`);  

    addSetX.innerText    = "X";
    addSetForm.innerText = todoInputValue; 

    addSetForm.append(addSetX);
    todoSetLists.append(addSetForm);
}

todoGetLabel.addEventListener("click", handleTodoLists);

// To-Do Delete
// 유저가 TOdo를 클릭하면
const handleInput = document.querySelector(".to-do__setLists");
console.log(handleInput)
const aaa = (event)=> {
    // 클릭한 div를 갖고 완료목록에 넘겨준다.
    console.log(event);
}

handleInput.addEventListener("click" , aaa)




// To-Do complet 
const todoComplet = document.querySelector(".to-do__completed");

const makeTodoCompletList = () =>{
    const addSetForm  = document.createElement("div");
    const addSetInput = document.createElement("input");
    const addSetLabel = document.createElement("label");
    
    addSetForm.classList.add("to-do__completed__form");
    
    // Input and Label Setting
    let todoNum = idValue++;
    addSetInput.setAttribute("type", "checkbox");
    addSetInput.setAttribute("id", `todo${todoNum}`);
    addSetLabel.setAttribute("for",`todo${todoNum}`);
    addSetLabel.innerText = todoInputValue; 

    // Set ALL
    addSetForm.append(addSetInput);
    addSetForm.append(addSetLabel);
    todoSetLists.append(addSetForm);
}