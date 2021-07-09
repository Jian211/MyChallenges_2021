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

    // make todo Form.
    makeTodoList(todoInputValue);
    
    
}

const makeTodoList = ( todoInputValue ) =>{
    const addSetForm  = document.createElement("div");
    const addSetInput = document.createElement("input");
    const addSetLabel = document.createElement("label");
    
    addSetForm.classList.add("to-do__setLists");
    
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

todoGetLabel.addEventListener("click", handleTodoLists);