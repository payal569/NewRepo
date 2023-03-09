const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

let tasks = [];


function renderTasks() {

  
  taskList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      renderTasks();
    });
    const span = document.createElement('span');
    span.textContent = task.text;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks.splice(i, 1);
      renderTasks();
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    if (task.completed) {
      li.classList.add('completed');
    }
    taskList.appendChild(li);
  }
  taskCount.textContent = tasks.length;
}

// function to add a new task
function addTask(text) {
  tasks.push({
    text,
    completed: false
  });
  renderTasks();
}


// handle the form submission
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  const text = taskInput.value.trim();
  if (text !== '') {
    addTask(text);
    taskInput.value = '';
  }
  
});






