const todoList = document.querySelector(".todo-list");
const todoBtn = document.querySelector(".todo-add__button");
const todoInput = document.querySelector(".todo-input");
let editMode = false;
// Create Todo
const createTodo = (e) => {
    e.preventDefault();

    const todosFromStorage = getTodosFromStorage();

    if (todoInput.value.trim("") === "") {
        showAlert("Please enter a task before adding it to the to-do list.");
        return;
    }
    if (todosFromStorage.includes(todoInput.value.toLowerCase())) {
        showAlert("This task is already added to the to-do list.");
        return;
    }

    if (editMode) {
        const todoToEdit = todoList.querySelector(".edit-mode");
        removeTodoFromStorage(todoToEdit.innerText);
        todoToEdit.remove();
        editMode = false;
    }
    todoBtn.innerHTML = '<i class="fa-solid fa-plus add-icon"></i>';
    todoBtn.style.backgroundColor = "#52b788";

    addTodoDOM(todoInput.value);
    setTodosToStorage(todoInput.value.toLowerCase());

    todoInput.value = "";
};

function removeTodoFromStorage(item) {
    let todosFromStorage = getTodosFromStorage();

    todosFromStorage = todosFromStorage.filter((i) => i !== item);

    localStorage.setItem("todos", JSON.stringify(todosFromStorage));
}

// Remove Todo

const removeTodo = (e) => {
    const todosFromStorage = getTodosFromStorage();
    const todoDOM = e.target.parentElement.parentElement;
    if (e.target.classList.contains("btn-close")) {
        const todoText = todoDOM.querySelector(".todo__text").innerText;

        todosFromStorage.forEach((todo, index) => {
            if (todo === todoText.toLowerCase()) {
                todosFromStorage.splice(index, 1);
                todoDOM.remove();
                localStorage.setItem("todos", JSON.stringify(todosFromStorage));
            }
        });
    }
};

// Show AlertDOM
const showAlert = (text) => {
    const alertDOM = document.getElementById("alert");
    alertDOM.style.top = 0;
    alertDOM.innerHTML = `
    <div>${text}</div>
    `;
    setTimeout(() => {
        alertDOM.style.top = -100 + "px";
    }, 1800);
};

// Set Todo To Storage
const setTodosToStorage = (todo) => {
    const todosFromStorage = getTodosFromStorage();

    todosFromStorage.push(todo);
    localStorage.setItem("todos", JSON.stringify(todosFromStorage));
};

// Get Todos From Storage
const getTodosFromStorage = () => {
    const todosFromStorage = localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : [];

    return todosFromStorage;
};

// Add Todo DOM
const addTodoDOM = (text) => {
    const div = document.createElement("div");
    div.classList.add("todo");

    div.innerHTML = `
        <p class="todo__text">${text}</p>
        <button class="todo__close">
            <i class="fa-solid fa-xmark btn-close"></i>
        </button>
        <button class="todo__edit">
        <i class="fa-solid fa-pen-to-square btn-edit"></i>
        </button>
        `;

    div.style.backgroundColor = randomColor();

    document.querySelector(".todo-list").appendChild(div);
};

// Random Background Color
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Check UI

const checkUI = () => {
    const todosFromStorage = getTodosFromStorage();

    todosFromStorage.forEach((todo) => {
        addTodoDOM(todo);
    });
};

// Edit Todo

const editTodos = (e) => {
    if (e.target.classList.contains("btn-edit")) {
        const todoDOM = e.target.parentElement.parentElement;
        todoList.querySelectorAll(".todo").forEach((todo) => {
            if (todoDOM === todo) {
                todo.classList.add("edit-mode");
                todoBtn.style.backgroundColor = "red";
                todoBtn.innerHTML = `
                <i class="fa-solid fa-pen-to-square btn-edit"></i>`;
                todoInput.value = todo.innerText;
            }
        });
        editMode = true;
    }
};

// Event Listeners

function init() {
    document.addEventListener("DOMContentLoaded", randomColor);
    document.addEventListener("DOMContentLoaded", checkUI);
    document.querySelector(".todo-add").addEventListener("submit", createTodo);
    todoList.addEventListener("click", removeTodo);
    todoList.addEventListener("click", editTodos);
}
init();
