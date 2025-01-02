document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addButton = document.getElementById("addButton");
    const yearSpan = document.getElementById("year");

    // Set the current year in the footer
    yearSpan.textContent = new Date().getFullYear();

    // Add a new task
    addButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Mark as Completed Button
        const completeButton = document.createElement("button");
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.style.background = "none";
        completeButton.style.border = "none";
        completeButton.style.color = "#28a745";
        completeButton.style.cursor = "pointer";
        completeButton.style.marginRight = "10px";

        completeButton.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        // Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.style.background = "none";
        deleteButton.style.border = "none";
        deleteButton.style.color = "#dc3545";
        deleteButton.style.cursor = "pointer";

        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
