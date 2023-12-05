import { createFilledArray } from '.';

const arrayItem = { id: 1, name: 'test' };
const expectedArray = [arrayItem, arrayItem, arrayItem, arrayItem, arrayItem];

describe('createFilledArray', () => {
  test('It creates an array with placeholders', () => {
    const generated = createFilledArray(5, arrayItem);
    expect(generated).toEqual(expectedArray);
  });
});
