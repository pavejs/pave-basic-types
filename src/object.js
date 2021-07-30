export default {
  resolve: ({ value }) => {

    throw new Error(`Expected a value of type Object but was provided value ${JSON.stringify(value)}`);
  }
}
