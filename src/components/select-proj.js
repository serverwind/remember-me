const allProjects = document.querySelectorAll("#projects > li");
let projLen = allProjects.length;

function selectProj() {
  for (let i = 0; i < projLen; i++) {
    if (allProjects[i].classList.contains("chosen-proj")) {
      allProjects[i].classList.remove("chosen-proj");
    }
  }

  this.classList.add('chosen-proj');
}

allProjects.forEach((project) => {
  project.addEventListener("click", selectProj);
});

export { selectProj };
