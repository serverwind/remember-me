import { loadTasks } from "./loadApp";

const allProjects = document.querySelectorAll("#projects > li > span");

function selectProj() {
  let selectedProj = document.querySelector(".chosen-proj");
  selectedProj.classList.remove("chosen-proj");
  this.classList.add("chosen-proj");

  loadTasks();
}

allProjects.forEach((project) => {
  project.addEventListener("click", selectProj);
});

export { selectProj }
