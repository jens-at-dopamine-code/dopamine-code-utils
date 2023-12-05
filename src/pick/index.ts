import { entries } from '../entries';

export const pick = <T extends object>(
  object: T,
  keys: Array<keyof T>,
): Partial<T> => {
  if (!object || typeof object !== 'object' || Array.isArray(object)) {
    return object;
  }
  return entries(object).reduce((picked, [key, value]) => {
    if (keys.includes(key)) {
      // spread is an antipattern in reduce
      // eslint-disable-next-line no-param-reassign
      picked[key] = value;
    }
    return picked;
  }, {} as Partial<T>);
};
