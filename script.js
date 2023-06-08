// script.js

// Selecting DOM elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Event listener for form submission
taskForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const taskText = taskInput.value.trim(); // Get task input value

  if (taskText !== '') {
    // Create new task element
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Add event listener to delete button
    const deleteButton = taskItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function () {
      taskItem.remove(); // Remove task item from the list
    });

    // Append task item to the list
    taskList.appendChild(taskItem);

    // Clear task input
    taskInput.value = '';
  }
});
