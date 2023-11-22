import {removeTask} from "./remove-task"
import { updateDB } from "./updateDB";

const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("new-task-input");
const submitButton = document.getElementById("new-task-add");
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

submitButton.addEventListener("click", () => {
  checkInput(taskInput.value);
});

function showError(error) {
  console.log(error);
}

export default taskStorage;
