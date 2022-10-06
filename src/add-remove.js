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
    const newTask = {
      index: newIndex,
      desc: newTaskDesc,
      completed: false,
    };
    if (this.tasksArray.push(newTask)) {
      return true;
    }

    return false;
  }

  editList(newDesc, taskIndex) {
    if(this.tasksArray[taskIndex].desc = newDesc)
      return true;

    return false;
  }

  removeFromList(taskInedx) {
    if (this.tasksArray.splice(taskInedx, 1)) {
      return true;
    }

    return false;
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
