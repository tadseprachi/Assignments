function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a valid task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    // Create new list item
    let li = document.createElement("li");
    li.textContent = taskText;

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    // Remove task on button click
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Append button to list item & list item to list
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}
