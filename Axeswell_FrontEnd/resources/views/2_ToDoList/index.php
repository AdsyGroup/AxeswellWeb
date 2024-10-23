<?php
$pageTitle = "TO DO LIST";
include 'HeaderToDoList.php'; ?>

<div class="todo-container">
    <h1 class="todo-title">My To-Do List</h1>
    <div class="todo-input-container">
        <input type="text" id="todoInput" placeholder="What needs to be done?" />
        <button onclick="addTodo()">Add</button>
    </div>
    <ul id="todoList" class="todo-list">
        <!-- List of tasks will appear here -->
    </ul>
</div>