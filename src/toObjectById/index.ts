type ObjectWithId = { id: string | number };

export const toObjectById = <T extends ObjectWithId>(array: T[]) =>
  array.reduce(
    (objectById, item) => {
      const { id } = item;
      // spread inside reduce is an anti pattern
      // eslint-disable-next-line no-param-reassign
      objectById[id] = item;
      return objectById;
    },
    {} as Record<string, T>,
  );
