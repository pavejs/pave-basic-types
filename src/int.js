export default {
    resolve: ({ value }) => {

        throw new Error(`Expected a value of type Int but was provided value ${JSON.stringify(value)}`);
    }
}