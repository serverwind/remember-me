import taskStorage from "./new-task";
import {updateDB} from "./updateDB";

const removeButtons = document.querySelectorAll(".remove-task");

function removeTask() {
  const taskID = this.parentElement.getAttribute("task-id");
  let i = taskStorage.length;

  while (i--) {
    if (taskID == taskStorage[i].ID) {
      taskStorage.splice(i, 1);
      this.parentElement.remove();
    }
  }
  return updateDB(taskID, 0, false);
}

removeButtons.forEach((button) => {
  button.addEventListener("click", removeTask);
});

export {removeTask};
