<?php
$pageTitle = "TO DO LIST";
include 'HeaderToDoList.php'; ?>


<div class="todo-container">
    <h1>To-Do List</h1>
    
    <!-- Clock Display -->
    <div class="clock" id="clock"></div>
    
    <!-- Plus Icon for Adding Task -->
    <div class="add-task-icon" onclick="openTodoModal()">+</div>
    
    <!-- Task List -->
    <ul id="todoList"></ul>
    
    <!-- Button to Open Save/Upload Modal -->
    <button class="logo-button" onclick="openSaveUploadModal()">
        <i class="file alternate icon"></i>
    </button>
</div>


<div id="todoModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeTodoModal()">&times;</span>
        <h2>Add New Task</h2>
        
        <!-- Title and Description Inputs -->
        <input type="text" id="todoTitle" placeholder="Task Title" required>
        <textarea id="todoDescription" placeholder="Task Description" required></textarea>
        

        <input type="text" id="todoCategory" placeholder="Task Category" required>
        
        <!-- Date and Time Input -->
        <label for="taskDateTime">Date and Time:</label>
        <input type="datetime-local" id="taskDateTime">
        
        <button class="ui button" onclick="addTodo()">Add Task</button>
    </div>
</div>

<!-- Modal for Save/Upload -->
<div id="saveUploadModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeSaveUploadModal()">&times;</span>
        <h2>Save or Upload Tasks</h2>
        
        <!-- Button to Save Tasks to Notepad -->
        <button class="ui button" onclick="saveTasksToNotepad()">
            <i class="download icon"></i> Save to Notepad
        </button>
        
        <!-- File Upload Section -->
        <input type="file" class="file-upload" id="fileUpload" accept=".txt" onchange="uploadTasks()">
    </div>
</div>


