const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("new-task-input");
const submitButton = document.getElementById("new-task-add");
const removeButtons = document.querySelectorAll(".remove-task");
const taskStorage = [];

function checkInput(task) {
  if (task === "") {
    return showError("Input empty");
  }
  return storeTask(task);
}

function storeTask(task) {
  const ID = taskStorage.length;
  taskStorage.push({ ID, task });

  return domConstructor(ID, task), updateDB(ID, task, true);
}

function domConstructor(ID, task) {
  const li = document.createElement("li");
  li.innerHTML = task;
  li.setAttribute("task-id", ID);

  const button = document.createElement("button");
  button.innerHTML = "x";
  button.classList.add("remove-task");
  button.addEventListener("click", removeTask);

  li.appendChild(button);
  taskList.appendChild(li);

  return console.log("dom created");
}

function removeTask() {
  const taskID = this.parentElement.getAttribute("task-id");
  let i = taskStorage.length;

  while (i--) {
    if (taskID == taskStorage[i].ID) {
      taskStorage.splice(i, 1);
      this.parentElement.remove();
    }
  }
  return updateDB(taskID, 0, false);
}

function updateDB(ID, task, mode) {
  const taskData = {
    id: ID,
    task: task,
  }

  if (mode) {
    localStorage.setItem(ID, JSON.stringify(taskData));
  } else {
    localStorage.removeItem(ID);
  }
}

removeButtons.forEach((button) => {
  button.addEventListener("click", removeTask);
});

submitButton.addEventListener("click", () => {
  checkInput(taskInput.value);
});

function showError(error) {
  console.log(error);
}

export default { taskStorage };
