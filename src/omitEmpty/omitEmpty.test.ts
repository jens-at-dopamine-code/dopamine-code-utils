import { omitEmpty } from '.';

const original = {
  a: 'a',
  b: 0,
  c: 1,
  d: true,
  e: false,
  f: ['a'],
  g: { a: 'a' },
  h: undefined,
  i: null,
  j: '',
  k: [],
  l: {},
};
const expectedResult = {
  a: 'a',
  b: 0,
  c: 1,
  d: true,
  e: false,
  f: ['a'],
  g: { a: 'a' },
};

describe('omitEmpty', () => {
  test('It returns an object without empty values', () => {
    const result = omitEmpty(original);
    expect(result).toEqual(expectedResult);
  });
});
