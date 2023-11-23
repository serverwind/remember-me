function updateDB(ID, task, priority, mode) {
  const taskData = {
    id: ID,
    task: task,
    priority: priority,
  };

  if (mode) {
    localStorage.setItem(`task${ID}`, JSON.stringify(taskData));
  } else {
    localStorage.removeItem(`task${ID}`);
  }
}

export { updateDB };
