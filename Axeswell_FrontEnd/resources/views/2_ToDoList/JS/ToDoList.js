let todos = [];

function openTodoModal() {
    document.getElementById('todoModal').style.display = 'block';
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
        const todoItem = {
            title,
            description,
            category,
            dateTime
        };
        todos.push(todoItem);
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

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodoList();
}

function openSaveUploadModal() {
    document.getElementById('saveUploadModal').style.display = 'block';
}

function closeSaveUploadModal() {
    document.getElementById('saveUploadModal').style.display = 'none';
}

function saveTasksToNotepad() {
    const blob = new Blob([JSON.stringify(todos, null, 2)], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'todos.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function uploadTasks() {
    const file = document.getElementById('fileUpload').files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const uploadedTasks = JSON.parse(e.target.result);
        todos = todos.concat(uploadedTasks);
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