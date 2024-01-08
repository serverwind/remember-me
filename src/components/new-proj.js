import { removeProj } from "./remove-proj";
import updateProj from "./updateProj";
import { selectProj } from "./select-proj";

const newProjButton = document.getElementById("new-proj");
const projectList = document.getElementById("projects");
const allProjects = document.querySelectorAll("#projects > li");

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
  const ID = Math.floor(Math.random() * 999);
  let input = document.querySelector(".proj-name");
  let name = input.value;
  let parent = this.parentElement;

  parent.setAttribute("proj-id", ID);

  let span = document.createElement("span");
  span.innerHTML = name;
  span.addEventListener('click', selectProj);
  parent.prepend(span);

  this.innerHTML = "x";
  this.removeEventListener("click", saveProj);
  this.addEventListener("click", removeProj);

  input.remove();

  return updateProj(ID, name, true);
}

allProjects.forEach((project) => {
  project.addEventListener("click", selectProj);
});
