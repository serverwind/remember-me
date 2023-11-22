import { updateDB } from "./updateDB";
import {domConstructor} from "./loadApp"
import tasksToLoad from "./loadApp"

const taskInput = document.getElementById("new-task-input");
const submitButton = document.getElementById("new-task-add");

function checkInput(task) {
  if (task === "") {
    return showError("Input empty");
  }
  return storeTask(task);
}

function storeTask(task) {
  const ID = Math.floor(Math.random() * 999);
  tasksToLoad.push({ ID, task });

  return domConstructor(ID, task), updateDB(ID, task, true);
}

submitButton.addEventListener("click", () => {
  checkInput(taskInput.value);
});

function showError(error) {
  console.log(error);
}

