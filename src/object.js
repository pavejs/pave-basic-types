export default {
  resolve: ({ value }) => {
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) return value;

    throw new Error(`Expected a value of type Object but was provided value ${JSON.stringify(value)}`);
  }
}
