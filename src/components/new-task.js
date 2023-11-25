import { updateDB } from "./updateDB";
import {domConstructor} from "./loadApp"
import tasksToLoad from "./loadApp"

const taskInput = document.getElementById("new-task-input");
const calendar = document.getElementById('date');
const submitButton = document.getElementById("new-task-add");

function checkInput(task, priority, date) {
  if (task === "") {
    return showError("Input empty");
  }
  return storeTask(task, priority, date);
}

function storeTask(task, priority, date) {
  const ID = Math.floor(Math.random() * 999);

  tasksToLoad.push({ ID, task, priority, date });

  return domConstructor(ID, task, priority, date), updateDB(ID, task, priority, true, date);
}

submitButton.addEventListener("click", () => {
  checkInput(taskInput.value, priority.value, calendar.value);
});

function showError(error) {
  console.log(error);
}

export default calendar
