import "./new-task";
import "./date-picker"
import { removeTask } from "./remove-task";
import { removeProj } from "./remove-proj";

const taskList = document.getElementById("task-list");
const projList = document.getElementById("projects");
let projToLoad = [];

function loadProj() {
  let projRegex = /\bproj(\d+)\b/; //proj0, proj1 ...
  projToLoad = [];

  Object.keys(localStorage).forEach((key) => {
    if (projRegex.test(key)) {
      let e = JSON.parse(localStorage.getItem(key));
      projToLoad.push(e);
    }
  });
  for (let p = 0; p < projToLoad.length; p++) {
    const l = projToLoad[p];
    projConstructor(l.id, l.proj);
  }
} loadProj()

function loadTasks() {
  const tasksToLoad = [];
  taskList.innerHTML = ''; //temporal decision, need to create garbage bin for this.
  let taskRegex = /\btask(\d+)\b/; //task0, task1 ...
  Object.keys(localStorage).forEach((key) => {
    if (taskRegex.test(key)) {
      let e = JSON.parse(localStorage.getItem(key));
      tasksToLoad.push(e);
    }
  });

  for (let i = 0; i < tasksToLoad.length; i++) {
    const t = tasksToLoad[i];
    if (t.projID == document.querySelector('.chosen-proj').getAttribute('proj-id')) {
      domConstructor(t.id, t.task, t.priority, t.date)
    }
  }
} loadTasks()

function domConstructor(ID, task, priority, date) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = task;
  span.classList.add('single-task');
  li.setAttribute("task-id", ID);

  const prio = document.createElement('span');
  prio.classList.add('task-priority');
  prio.innerHTML = `Priority: ${priority}`;

  const taskDate = document.createElement('span');
  taskDate.classList.add('task-date');
  taskDate.innerHTML = `Date: ${date}`;

  const remove = document.createElement("button");
  remove.innerHTML = "x";
  remove.classList.add("remove-task");
  remove.addEventListener("click", removeTask);

  li.appendChild(remove);
  li.appendChild(span);
  li.appendChild(prio);
  li.appendChild(taskDate);
  taskList.appendChild(li);

  return console.log("dom created");
}

function projConstructor(ID, proj) {
  const li = document.createElement("li");
  const span = document.createElement('span')
  span.setAttribute("proj-id", ID);
  span.innerHTML = proj;

  const remove = document.createElement("button");
  remove.innerHTML = "x";
  remove.classList.add("remove-proj");
  remove.addEventListener("click", removeProj);

  li.appendChild(span);
  li.appendChild(remove);
  projList.appendChild(li);
}

export { domConstructor, loadTasks, taskList, projToLoad as default};
