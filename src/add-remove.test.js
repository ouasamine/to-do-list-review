import Tasks from './add-remove.js';

const tasks = new Tasks();

describe('Testing List Interactions Methods', () => {
  tasks.addToList('new task');
  tasks.addToList('new task');
  tasks.addToList('new task');
  test('testAddFunction', () => {
    expect(tasks.addToList('Tasks 1')).toBeTruthy();
  });

  test('removeFromList', () => {
    expect(tasks.removeFromList(3)).toBeTruthy();
  });

  test('Edit List Item Description', () => {
    expect(tasks.editList('this is new desc', 1)).toBeTruthy();
  })
});
