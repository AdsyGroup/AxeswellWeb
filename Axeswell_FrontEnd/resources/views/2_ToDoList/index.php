<?php
$pageTitle = "TO DO LIST";
include 'HeaderToDoList.php'; ?>


<div class="todo-container">
    <h1>To-Do List</h1>
    
    <!-- Plus Icon for Adding Task -->
    <div class="add-task-icon" onclick="openTodoModal()">+</div>
    
    <!-- Task List -->
    <ul id="todoList"></ul>
</div>

<!-- Modal for Adding Task -->
<div id="todoModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeTodoModal()">&times;</span>
        <h2>Add New Task</h2>
        <input type="text" id="todoInput" placeholder="Enter a task">
        
        <!-- Date and Time Input -->
        <label for="taskDateTime">Date and Time:</label>
        <input type="datetime-local" id="taskDateTime">
        
        <button onclick="addTodo()">Add Task</button>
    </div>
</div>