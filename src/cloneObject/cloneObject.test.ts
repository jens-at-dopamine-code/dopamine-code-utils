import { cloneObject } from '.';

const testObject = {
  id: 1,
  name: 'test',
};

describe('cloneObject', () => {
  test('It creates a new reference with the same values', () => {
    const cloned = cloneObject(testObject);
    expect(cloned).not.toBe(testObject);
    expect(cloned).toEqual(testObject);
  });
});
