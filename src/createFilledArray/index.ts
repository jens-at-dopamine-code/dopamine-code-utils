import { cloneObject } from '../cloneObject';

export const createFilledArray = <T = unknown>(
  n: number,
  placeHolder: T,
): T[] => {
  return cloneObject<T[]>(new Array<T>(n).fill(placeHolder));
};
