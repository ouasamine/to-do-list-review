export default class Tasks {
  constructor() {
    this.tasksArray = [];
  }

  getList() {
    const fetchedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (fetchedTasks) {
      this.tasksArray = fetchedTasks;
    }
    return this.tasksArray;
  }

  setList(newTasksArray) {
    this.tasksArray = newTasksArray;
  }

  addToList(newTaskDesc) {
    const newIndex = this.tasksArray.length ? this.tasksArray.length : 0;
    this.tasksArray.push({
      index: newIndex,
      desc: newTaskDesc,
      completed: false,
    });
  }

  removeFromList(taskInedx) {
    this.tasksArray.splice(taskInedx, 1);
  }

  updateIndexes() {
    let cn = 0;
    this.tasksArray.forEach((task) => {
      task.index = cn;
      cn += 1;
    });
  }

  updateStorage() {
    if (this.tasksArray) {
      this.updateIndexes();
      const storeTasksArray = JSON.stringify(this.tasksArray);
      localStorage.setItem('tasks', storeTasksArray);
    }
  }
}

module.exports = Tasks;
