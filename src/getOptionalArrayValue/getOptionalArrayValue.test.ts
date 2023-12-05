import { getOptionalArrayValue } from '.';

const truthyValue = 'item';

const expectedArray = [truthyValue];

describe('getOptionalArrayValue', () => {
  test('Returns array with truthy values', () => {
    const arrayWithoutFalsy = [
      ...getOptionalArrayValue(truthyValue),
      ...getOptionalArrayValue(''),
      ...getOptionalArrayValue(undefined),
      ...getOptionalArrayValue(null),
      ...getOptionalArrayValue(0),
    ];
    expect(arrayWithoutFalsy).toEqual(expectedArray);
  });
});
