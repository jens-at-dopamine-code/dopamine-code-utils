import { entries } from '../entries';

const nonEmtpyPrimitives = ['number', 'boolean'];

export const omitEmpty = <T extends object>(data: T): Partial<T> => {
  return Object.fromEntries(
    entries(data).filter(([, value]) => {
      if (Array.isArray(value)) {
        return !!value.length;
      }
      if (typeof value === 'object') {
        return value && !!Object.keys(value).length;
      }
      if (nonEmtpyPrimitives.includes(typeof value)) {
        return true;
      }

      return !!value;
    }),
  ) as Partial<T>;
};
