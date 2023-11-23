import { updateDB } from "./updateDB";
import {domConstructor} from "./loadApp"
import tasksToLoad from "./loadApp"

const taskInput = document.getElementById("new-task-input");
const submitButton = document.getElementById("new-task-add");

function checkInput(task, priority) {
  if (task === "") {
    return showError("Input empty");
  }
  return storeTask(task, priority);
}

function storeTask(task, priority) {
  const ID = Math.floor(Math.random() * 999);
  tasksToLoad.push({ ID, task, priority });

  return domConstructor(ID, task, priority), updateDB(ID, task, priority, true);
}

submitButton.addEventListener("click", () => {
  checkInput(taskInput.value, priority.value);
});

function showError(error) {
  console.log(error);
}

