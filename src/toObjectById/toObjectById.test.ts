import { toObjectById } from '.';

const array = [
  { id: 1, name: 'one' },
  { id: 2, name: 'two' },
  { id: 3, name: 'three' },
];
const expectedResult = {
  1: { id: 1, name: 'one' },
  2: { id: 2, name: 'two' },
  3: { id: 3, name: 'three' },
};

describe('pick', () => {
  test('It returns an object with the picked keys', () => {
    const result = toObjectById(array);
    expect(result).toEqual(expectedResult);
  });
});
