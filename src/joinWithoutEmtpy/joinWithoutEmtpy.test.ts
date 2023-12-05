import { joinWithoutEmtpy } from '.';

const expectedResult = 'Hello Test';

describe('joinWithoutEmtpy', () => {
  test('It joins non empty strings', () => {
    const result = joinWithoutEmtpy(['', 'Hello', undefined, 'Test']);
    expect(result).toEqual(expectedResult);
  });
});
