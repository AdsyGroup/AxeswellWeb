let todos = [];
let editIndex = -1; // To keep track of the index of the task being edited

// Load todos from local storage when the page loads
window.onload = function() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
        renderTodoList();
    }
};

function openTodoModal() {
    document.getElementById('todoModal').style.display = 'block';
    clearModalFields();
    editIndex = -1; // Reset the edit index when opening the modal for a new task
    document.getElementById('modalTitle').innerText = 'Add New Task';
    document.getElementById('modalActionButton').innerText = 'Add Task';
}

function closeTodoModal() {
    document.getElementById('todoModal').style.display = 'none';
    clearModalFields();
}

function clearModalFields() {
    document.getElementById('todoTitle').value = '';
    document.getElementById('todoDescription').value = '';
    document.getElementById('todoCategory').value = '';
    document.getElementById('taskDateTime').value = '';
}

function addTodo() {
    const title = document.getElementById('todoTitle').value;
    const description = document.getElementById('todoDescription').value;
    const category = document.getElementById('todoCategory').value;
    const dateTime = document.getElementById('taskDateTime').value;

    if (title && description && category) {
        const todoItem = { title, description, category, dateTime };
        if (editIndex === -1) {
            // Adding a new task
            todos.push(todoItem);
        } else {
            // Editing an existing task
            todos[editIndex] = todoItem;
        }
        saveTodosToLocalStorage();
        renderTodoList();
        closeTodoModal();
    }
}

function renderTodoList() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${todo.title}</strong><br>
                <small>${todo.description}</small><br>
                <em>Category: ${todo.category}</em><br>
                <small>${new Date(todo.dateTime).toLocaleString()}</small>
            </div>
            <span class="delete-btn" onclick="deleteTodo(${index})">&times;</span>
        `;
        todoList.appendChild(li);
    });
}

function editTodo(index) {
    editIndex = index; // Set the edit index
    const todo = todos[index];
    document.getElementById('todoTitle').value = todo.title;
    document.getElementById('todoDescription').value = todo.description;
    document.getElementById('todoCategory').value = todo.category;
    document.getElementById('taskDateTime').value = todo.dateTime;

    document.getElementById('modalTitle').innerText = 'Edit Task';
    document.getElementById('modalActionButton').innerText = 'Update Task';

    openTodoModal(); // Open the modal to edit
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodosToLocalStorage(); // Save updated todos to local storage
    renderTodoList();
}

function openSaveUploadModal() {
    document.getElementById('saveUploadModal').style.display = 'block';
}

function closeSaveUploadModal() {
    document.getElementById('saveUploadModal').style.display = 'none';
}

function saveTodosToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function saveTasksToNotepad() {
    const blob = new Blob([JSON.stringify(todos, null, 2)], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;
    a.href = url;
    a.download = 'task_el_' + currentDate + '.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function uploadTasks() {
    const file = document.getElementById('fileUpload').files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const uploadedTasks = JSON.parse(e.target.result);
        todos = todos.concat(uploadedTasks);
        saveTodosToLocalStorage();
        renderTodoList();
    };
    reader.readAsText(file);
}

function updateClock() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    document.getElementById('clock').innerText = now.toLocaleDateString('en-US', options);
}

setInterval(updateClock, 1000);
updateClock();
