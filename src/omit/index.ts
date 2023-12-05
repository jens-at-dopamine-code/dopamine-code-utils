import { entries } from '../entries';

export const omit = <T extends object>(
  object: T,
  keys: Array<keyof T>,
): Partial<T> => {
  if (!object || typeof object !== 'object' || Array.isArray(object)) {
    return object;
  }

  return entries(object).reduce((omitted, [key, value]) => {
    if (!keys.includes(key)) {
      // spread is an antipattern in reduce
      // eslint-disable-next-line no-param-reassign
      omitted[key] = value;
    }
    return omitted;
  }, {} as Partial<T>);
};
