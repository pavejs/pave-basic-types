export default {
  resolve: ({ value }) => {
    if (typeof value === 'string' && !value.trim()) return null;

    const strDate = (value instanceof Date ? value : new Date(value)).toJSON();
    if (strDate) return strDate;

    throw new Error(`Expected a value of type Datetime but was provided value ${JSON.stringify(value)}`);
  }
}
