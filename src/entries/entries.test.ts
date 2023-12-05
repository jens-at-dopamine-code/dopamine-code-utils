import { entries } from '.';

const arrayItem = { id: 1, name: 'test' };
const expectedArray = [
  ['id', 1],
  ['name', 'test'],
];

describe('entries', () => {
  test('It returns typed object entries', () => {
    const typedEntries = entries(arrayItem);
    expect(typedEntries).toEqual(expectedArray);
  });
});
