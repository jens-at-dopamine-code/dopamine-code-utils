export const getOptionalArrayValue = <T>(item?: T) => {
  return item ? [item] : [];
};
