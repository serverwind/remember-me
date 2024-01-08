const allProjects = document.querySelectorAll("#projects > li");

function selectProj() {
  let selectedProj = document.querySelector('.chosen-proj');
  selectedProj.classList.remove('chosen-proj')
  this.classList.add('chosen-proj');
}

allProjects.forEach((project) => {
  project.addEventListener("click", selectProj);
});

export { selectProj };
