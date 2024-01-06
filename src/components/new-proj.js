import { removeProj } from './remove-proj'

const newProjButton = document.getElementById("new-proj");
const projectList = document.getElementById("projects");

newProjButton.addEventListener("click", addProj);

function addProj() {
  let proj = document.createElement("li");
  let input = document.createElement("input");
  let save = document.createElement("button");

  input.value = "New project";
  input.classList.add("proj-name");
  save.classList.add("save-proj");
  save.innerHTML = "s";
  save.addEventListener("click", saveProj);

  proj.append(input, save);
  projectList.appendChild(proj);
}

function saveProj() {
  let input = document.querySelector(".proj-name");
  let name = input.value;
  let parent = this.parentElement;
  
  let span = document.createElement('span');
  span.innerHTML = name;
  parent.prepend(span)

  input.remove();

  this.innerHTML = 'x';
  this.removeEventListener('click', saveProj);
  this.addEventListener('click', removeProj);
}
