import { removeProj } from "./remove-proj";
import updateProj from "./updateProj";
import { selectProj } from "./select-proj";

const newProjButton = document.getElementById("new-proj");
const projectList = document.getElementById("projects");

newProjButton.addEventListener("click", addProj);

function addProj() {
  let proj = document.createElement("li");
  let input = document.createElement("input");
  let save = document.createElement("button");
  let saveIcon = document.createElement('span');

  input.value = "New project";
  input.classList.add("proj-name");
  save.classList.add("save-proj");
  save.addEventListener("click", saveProj);
  saveIcon.classList.add('material-icons');
  saveIcon.innerHTML = 'done';

  save.append(saveIcon);
  proj.append(input, save);
  projectList.appendChild(proj);
}

function saveProj() {
  const ID = Math.floor(Math.random() * 999);
  let input = document.querySelector(".proj-name");
  let name = input.value;
  let parent = this.parentElement;

  let span = document.createElement("span");
  span.innerHTML = name;
  span.setAttribute("proj-id", ID);
  span.addEventListener('click', selectProj);
  parent.prepend(span);

  this.innerHTML = "x";
  this.removeEventListener("click", saveProj);
  this.addEventListener("click", removeProj);

  input.remove();

  return updateProj(ID, name, true);
}

