import "./new-task";
import "./date-picker"
import { removeTask } from "./remove-task";

const taskList = document.getElementById("task-list");
const tasksToLoad = [];

function parseStorage() {
  let taskRegex = /\btask(\d+)\b/; //task0, task1 ...

  Object.keys(localStorage).forEach((key) => {
    if (taskRegex.test(key)) {
      let e = JSON.parse(localStorage.getItem(key));
      tasksToLoad.push(e);
    }
  });

  return loadDom(tasksToLoad);
}
parseStorage();

function loadDom() {
  for (let i = 0; i < tasksToLoad.length; i++) {
    const t = tasksToLoad[i];
    domConstructor(t.id, t.task, t.priority)
  }
}

function domConstructor(ID, task, priority) {
  const li = document.createElement("li");
  li.innerHTML = task;
  li.setAttribute("task-id", ID);

  const prio = document.createElement('span');
  prio.innerHTML = priority;

  const button = document.createElement("button");
  button.innerHTML = "x";
  button.classList.add("remove-task");
  button.addEventListener("click", removeTask);

  li.appendChild(button);
  li.appendChild(prio);
  taskList.appendChild(li);

  return console.log("dom created");
}

export { domConstructor, tasksToLoad as default};
