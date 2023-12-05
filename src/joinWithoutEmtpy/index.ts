export const joinWithoutEmtpy = (
  values: Array<string | undefined>,
  separator = ' ',
) => values.filter((value) => !!value).join(separator);
