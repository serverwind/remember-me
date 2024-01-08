import { loadTasks } from "./loadApp";

function selectProj() {
  let selectedProj = document.querySelector(".chosen-proj");
  selectedProj.classList.remove("chosen-proj");
  this.classList.add("chosen-proj");

  loadTasks();
}

export { selectProj };
