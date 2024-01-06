const removeButtons = document.querySelectorAll(".remove-proj");

function removeProj() {
  this.parentNode.remove();
}

removeButtons.forEach((button) => {
  button.addEventListener("click", removeProj);
});

export { removeProj };
