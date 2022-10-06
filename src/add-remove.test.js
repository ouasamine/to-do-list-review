/**
 * @jest-environment jsdom
 */

import Tasks from './add-remove.js';
import toggleStatus from './task-status.js';
import displayTasks from './index.js';

const tasks = new Tasks();

describe('Testing List Interactions Methods', () => {
  test('testAddFunction', () => {
    expect(tasks.addToList('Tasks 1')).toBeTruthy();
    expect(tasks.addToList('Tasks 2')).toBeTruthy();
    expect(tasks.addToList('Tasks 3')).toBeTruthy();
    expect(tasks.addToList('Tasks 4')).toBeTruthy();
  });

  test('removeFromList', () => {
    expect(tasks.removeFromList(3)).toBeTruthy();
  });

  test('Edit List Item Description', () => {
    expect(tasks.editList('this is new desc', 1)).toBeTruthy();
  });

  test('Check status of task', () => {
    const newTask = tasks.getList()[0];
    expect(toggleStatus(newTask)).toBeTruthy();
  });

  test('Test clearAllCompleted Method', () => {
    expect(tasks.clearAllCompleted()).toBeTruthy();
  });
});


test('Function to add a new task', () => {
    document.body.innerHTML =
    '<div>' +
    '  <ul><li></li></ul>' +
    '</div>';
    const list = document.querySelectorAll('ul li');
    const htmlTasksContainer = document.querySelector('ul');
    displayTasks(htmlTasksContainer);
    expect(list).toHaveLength(1);
});
