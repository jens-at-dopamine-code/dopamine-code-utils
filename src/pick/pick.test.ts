import { pick } from '.';

const original = { a: 'a', b: 'b', c: 'c', d: 'd' };
const expectedResult = { b: 'b', c: 'c' };

describe('pick', () => {
  test('It returns an object with the picked keys', () => {
    const result = pick(original, ['b', 'c']);
    expect(result).toEqual(expectedResult);
  });
});
