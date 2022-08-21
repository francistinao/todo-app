const todoValue = document.getElementById('todo');
const addTodoListBtn = document.getElementById('new-todo');
const todoList = document.querySelector('.todo-list');
const todoCounter = document.getElementById('counter');


//This will store the input of the user from the to do list input bar
let todoListValue = [];
let todoCount = 0;

todoCounter.innerText = todoCount;

const getTodoList = () => {
    todoListValue = todoValue.value.stringify();
}

//Events under here
const addTodoButton = () => {
    addTodoListBtn.addEventListener("click", () => {
        todoValidation();
    })
}

//deleting a todo list
const deleteTodo = (e) => {
    const item = e.target;
    if(item.classList[0] === 'delete-btn'){
        todoCount = todoCount - 1;
        todoCounter.innerText = todoCount;
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === 'check-btn'){
        const todo = item.parentElement;
        const buttonColor = item.parentElement.firstChild;
        todo.classList.toggle('completed');
        buttonColor.classList.toggle('buttonColor');
        console.log(buttonColor);
    }
}


todoList.addEventListener("click", deleteTodo);

// Functions

const clearTodoValue = () => {
    todoValue.value = ""
}

const todoValidation = () => {
    todoListValue = todoValue.value;
    if(todoListValue === "") {
        alert("Please enter a task")
    } else {
        addTodo();
    }
}

//Adding a todo list
const addTodo = () => {
    todoCount = todoCount + 1;
    todoCounter.innerText = todoCount;
    //Div container for todo list
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodoValue = document.createElement('li');
    const checkTodoBtn = document.createElement('button');
    //Displays the check button
    checkTodoBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    //Basically adding a classname to the button for styling
    checkTodoBtn.classList.add('check-btn');
    todoDiv.appendChild(checkTodoBtn);

    newTodoValue.innerText = todoValue.value;
    newTodoValue.classList.add('todo-item');
    //Adding the newTodoValue inside the todoDiv
    todoDiv.appendChild(newTodoValue);
    
    const deleteTodoBtn = document.createElement('button');

    //Displays the delete button
    deleteTodoBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    deleteTodoBtn.classList.add('delete-btn'); 
    todoDiv.appendChild(deleteTodoBtn);
    //Append or add to the actual DOM of the node todo-list
    todoList.appendChild(todoDiv);
    console.log(todoList);
    clearTodoValue();
}

//functions that are enabled by default if clicked is true
addTodoButton();
