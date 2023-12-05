import { omit } from '.';

const original = { a: 'a', b: 'b', c: 'c', d: 'd' };
const expectedResult = { b: 'b', c: 'c' };

describe('omit', () => {
  test('It returns an object without the omitted keys', () => {
    const result = omit(original, ['a', 'd']);
    expect(result).toEqual(expectedResult);
  });
});
