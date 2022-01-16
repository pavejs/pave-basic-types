export default {
  resolve: ({ value }) => {
    if (value instanceof Number) return value;
    if (typeof value === 'string' && !value.trim()) return null;
    if (!isNaN(Number(value))) return Number(value);

    throw new Error(`Expected a value of type Number but was provided value ${JSON.stringify(value)}`);
  }
}
