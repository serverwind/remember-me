const taskList = document.getElementById('task-list');
const taskInput = document.getElementById("new-task-input");
const submitButton = document.getElementById("new-task-add");
const taskStorage = [];

submitButton.addEventListener("click", () => {
  checkInput(taskInput.value);
});

function checkInput(task) {
  if (task === "") {
    return showError("Input empty");
  }
  return storeTask(task);
}

function showError(error) {
  console.log(error);
}

function storeTask(task) {
  const ID = taskStorage.length + 1;
  taskStorage.push({ ID, task })
  
  return domConstructor(task);
}

function domConstructor(task) {
  const li = document.createElement('li');
  li.innerHTML = task;

  const button = document.createElement('button');
  button.innerHTML = 'x';

  li.appendChild(button);
  taskList.appendChild(li);
}



export default { checkInput };
