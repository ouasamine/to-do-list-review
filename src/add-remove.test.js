/**
 * @jest-environment jsdom
 */

import Tasks from './add-remove.js';
import toggleStatus from './task-status.js';

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
