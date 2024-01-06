import projToLoad from "./loadApp";
import updateProj from "./updateProj";

const removeButtons = document.querySelectorAll(".remove-proj");

function removeProj() {
  const projID = this.parentElement.getAttribute("proj-id");
  let i = projToLoad.length;

  this.parentElement.remove();

  while (i--) {
    if (projID == projToLoad[i].ID) {
      projToLoad.splice(i, 1);
    }
  }
  updateProj(projID, 0, false);
}

removeButtons.forEach((button) => {
  button.addEventListener("click", removeProj);
});

export { removeProj };
