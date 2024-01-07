function updateDB(ID, task, priority, mode, date, projID) {
  const taskData = {
    id: ID,
    task: task,
    priority: priority,
    date: date,
    projID: projID,
  };

  if (mode) {
    localStorage.setItem(`task${ID}`, JSON.stringify(taskData));
  } else {
    localStorage.removeItem(`task${ID}`);
  }
}

export { updateDB };
