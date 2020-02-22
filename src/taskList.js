class TaskList {
  constructor() {
    this.tasks = [];
  }

  createNewTask(description) {
    const newTask = new TaskListItem(description);
    this.tasks.push(newTask);
  }

  deleteTask(description) {
    this.tasks = this.tasks.filter(task => task.description !== description);
  }

  render() {
    return `
    <h3>My Todos</h3>
    <ul id = "tasks">${this.tasks.map(task => task.render()).join("")}</ul>
    `;
  }
}
