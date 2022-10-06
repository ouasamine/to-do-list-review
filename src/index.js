import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import Tasks from './add-remove.js';
import toggleStatus from './task-status.js';

const htmlTasksContainer = document.querySelector('ul');
const newTaskInput = document.querySelector('input');
const inputIcon = document.querySelector('.input-icon');
const clearCompleted = document.querySelector('#clear-complete');
const tasksList = new Tasks();
let tasks = tasksList.getList();

function displayTasks(container) {
  container.innerHTML = '';

  tasks.forEach((task) => {
    const listitem = document.createElement('li');
    const checkbox = document.createElement('input');
    const moveButt = document.createElement('div');
    const removeButt = document.createElement('div');
    const icon = document.createElement('span');
    const icon2 = document.createElement('span');
    icon.classList.add('fa-solid', 'fa-ellipsis-vertical', 'fa-lg');
    icon2.classList.add('fa-solid', 'fa-trash-can', 'fa-lg');
    moveButt.classList.add('move', 'setting');
    moveButt.appendChild(icon);
    removeButt.classList.add('remove', 'setting');
    removeButt.appendChild(icon2);
    checkbox.type = 'checkbox';
    if (task.completed === true) {
      checkbox.setAttribute('checked', 'checked');
      listitem.style.textDecoration = 'line-through';
    }
    listitem.contentEditable = 'true';
    listitem.appendChild(checkbox);
    listitem.appendChild(document.createTextNode(task.desc));
    listitem.appendChild(moveButt);
    listitem.addEventListener('input', () => {
      tasks.editList(listitem.innerText, task.index);
      tasksList.updateStorage();
    });
    container.appendChild(listitem);
    listitem.addEventListener('focus', (e) => {
      moveButt.remove();
      e.currentTarget.appendChild(removeButt);
      removeButt.addEventListener('click', () => {
        listitem.remove();
        tasksList.removeFromList(task.index);
        tasksList.updateStorage();
      });
    });
    listitem.addEventListener('focusout', (e) => {
      removeButt.remove();
      e.currentTarget.appendChild(moveButt);
    });
    checkbox.addEventListener('change', (e) => {
      if (e.currentTarget.checked === true) {
        listitem.style.textDecoration = 'line-through';
      } else {
        listitem.style.textDecoration = 'none';
      }
      toggleStatus(task);
      tasksList.updateStorage();
    });
  });
}
displayTasks(htmlTasksContainer);
newTaskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    tasksList.addToList(e.currentTarget.value);
    tasksList.updateStorage();
    displayTasks(htmlTasksContainer);
  }
});
inputIcon.addEventListener('click', () => {
  tasksList.addToList(newTaskInput.value);
  tasksList.updateStorage();
  displayTasks(htmlTasksContainer);
});
clearCompleted.addEventListener('click', () => {
  tasks = tasks.filter((task) => !task.completed);
  tasksList.setList(tasks);
  tasksList.updateStorage();
  displayTasks(htmlTasksContainer);
});
