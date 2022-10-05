import Tasks from './add-remove.js';

const tasks = new Tasks();
describe('addFunction', () => {
  test('testAddFunction', () => {
    expect(tasks.addToList('Tasks 1')).toBeTruthy();
  });
  test('removeFromList', () => {
    expect(tasks.removeFromList(3)).toBeTruthy();
  })
});
