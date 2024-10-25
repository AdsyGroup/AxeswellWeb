function openTodoModal() {
    document.getElementById('todoModal').style.display = 'block';
}

function closeTodoModal() {
    document.getElementById('todoModal').style.display = 'none';
}

function addTodo() {
    const taskInput = document.getElementById('todoInput');
    const taskText = taskInput.value.trim();
    const taskDateTime = document.getElementById('taskDateTime').value;
    
    if (taskText !== '' && taskDateTime !== '') {
        const taskList = document.getElementById('todoList');
        const newTask = document.createElement('li');
        const dateTimeFormatted = new Date(taskDateTime).toLocaleString();
        newTask.innerHTML = `<strong>${taskText}</strong> <br> <small>${dateTimeFormatted}</small>`;
        
        taskList.appendChild(newTask);
        
        taskInput.value = ''; // Clear input
        document.getElementById('taskDateTime').value = ''; // Clear date input
        closeTodoModal(); // Close modal
    } else {
        alert('Please enter a task and select a date and time.');
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('todoModal');
    if (event.target === modal) {
        closeTodoModal();
    }
};