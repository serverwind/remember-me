function updateDB(ID, task, mode) {
  const taskData = {
    id: ID,
    task: task,
  };

  if (mode) {
    localStorage.setItem(`task${ID}`, JSON.stringify(taskData));
  } else {
    localStorage.removeItem(`task${ID}`);
  }
}

export { updateDB };
