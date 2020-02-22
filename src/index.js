document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const renderApp = () => (listContainer.innerHTML = taskList.render());

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDesc = document.getElementById("new-task-description");
  const list = document.getElementById("list");
  // Add Form Behavior Here!

  newTaskForm.addEventListener("submit", e => {
    e.preventDefault();
    taskList.createNewTask(newTaskDesc.value);
    e.target.reset();
    renderApp();
  });

  list.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });

  renderApp();
});
