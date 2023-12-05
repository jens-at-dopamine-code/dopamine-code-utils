type Entry<T extends object> = [keyof T, T[keyof T]];
type Entries<T extends object> = Entry<T>[];

export const entries = <T extends object>(object: T) => {
  return Object.entries(object) as Entries<T>;
};
