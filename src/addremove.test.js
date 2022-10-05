import addToList from "./addremove.js";

describe('addFunction', () =>
  test('testAddFunction', () => { 
    expect(addToList('Tasks 1')).toBeTruthy()
  })
);
