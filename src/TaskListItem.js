class TaskListItem {
  constructor(description) {
    this.description = description;
  }

  render() {
    return `<li>${this.description}
    <button data-description = ${this.description}>Delete</button>
    </li>`;
  }
}
