export default {
  resolve: ({ value }) => {

    throw new Error(`Expected a value of type Date but was provided value ${JSON.stringify(value)}`);
  }
}
