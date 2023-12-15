import {removeProj} from "./remove-proj";

const newProjButton = document.getElementById('new-proj');
const projectList = document.getElementById('projects');

newProjButton.addEventListener('click', addProj);

function addProj() {
  let proj = document.createElement('li');
  let input = document.createElement('input');
  let remove = document.createElement('button');

  input.value = 'New project';
  remove.classList.add('remove-proj');
  remove.innerHTML = 's';
  remove.addEventListener('click', removeProj);

  proj.append(input, remove);
  projectList.appendChild(proj)
}

export default addProj
