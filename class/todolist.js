// Set our References

const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");

const taskCounter = document.getElementById("taskCounter");

const clearBtn = document.getElementById("clearBtn");

// Update counter
function updateCounter() {
  const count = taskList.children.length;
  taskCounter.textContent = `Tasks remaining: ${count}`;
}

//Load task when page loads
document.addEventListener("DOMContentLoaded", loadTasks);

//add Task on button click
addTaskBtn.addEventListener("click", addTask);

// Add task on Enter Key  Press
taskInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

//addtask Function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please add a task");
    return;
  }
  const task = { text: taskText, completed: false };
  saveTask(task); //save to local storage
  createTaskElement(task); //show in the webpage
  taskInput.value = "";

    // Edit task on double-click
  li.addEventListener("dblclick", function() {
    const currentText = li.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;

    li.textContent = "";   // clear li
    li.appendChild(input);
    input.focus();

    // Save edited task on Enter or blur
    input.addEventListener("blur", () => {
      li.textContent = input.value || currentText;
    });
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        li.textContent = input.value || currentText;
      }
    });
  });

  taskList.appendChild(li);
  taskInput.value = "";
  updateCounter();
};

// Clear all tasks
clearBtn.addEventListener("click", function() {
  taskList.innerHTML = "";
  updateCounter();
});

function createTaskElement(task) {
  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  const span = document.createElement("span");
  span.textContent = task.text;  //property of task object to insert task text into span safely

  // if (task.completed) {
  //   span.style.textDecoration = "line-through";
  //   span.style.color = "gray";
  // }

  const completeBtn = document.createElement("button");
  completeBtn.className = "btn btn-success btn-sm me-2";
  completeBtn.innerHTML = "✅";
  completeBtn.addEventListener("click", () => {
    task.completed = !task.completed;
    if (task.completed) {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "";
    }
    updateTaskInStorage(task.text, task.completed);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn shadow btn-danger btn-sm";
  deleteBtn.innerHTML = "🗑";
  deleteBtn.addEventListener("click", function () {
    li.remove();
    deleteTaskFromStorage(task.text);
  });

  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";
  btnGroup.appendChild(completeBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);
  taskList.appendChild(li);
}

// Local Storage Functions
function getTasksFromStorage() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

function saveTask(task) {
  const tasks = getTasksFromStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskInStorage(taskText, completedStatus) {
  const tasks = getTasksFromStorage();
  const updatedTasks = tasks.map((t) =>
    t.text === taskText ? { ...t, completed: completedStatus } : t
  );
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function deleteTaskFromStorage(taskText) {
  let tasks = getTasksFromStorage();
  tasks = tasks.filter((t) => t.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = getTasksFromStorage();
  tasks.forEach(task =>  createTaskElement(task));
}
