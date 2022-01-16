export default {
  resolve: ({ value }) => {
    if (typeof value !== 'string') {
      if (typeof value.toString === 'function') {
        value = value.toString();
      } else {
        throw new Error(
          `Expected a value of type String but was provided value ${JSON.stringify(value)}`
        );
      }
    }

    return value;
  }
};
