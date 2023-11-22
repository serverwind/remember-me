import { ID, task, mode } from "./new-task";

function updateDB(ID, task, mode) {
  const taskData = {
    id: ID,
    task: task,
  };

  if (mode) {
    localStorage.setItem(ID, JSON.stringify(taskData));
  } else {
    localStorage.removeItem(ID);
  }
}

export { updateDB };
