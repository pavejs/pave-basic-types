export default {
  args: {
    maxLength: { nullable: 'int' },
    minLength: { nullable: 'int' },
    trim: { type: 'boolean', defaultValue: true }
  },
  resolve: ({
    args: { maxLength, minLength, trim },
    value
  }) => {
    if (typeof value !== 'string') {
      if (typeof value.toString === 'function') {
        value = value.toString();
      } else {
        throw new Error(
          `Expected a value of type String but was provided value ${JSON.stringify(value)}`
        );
      }
    }

    value = value.replaceAll('\u0000', '');
    if (trim) value = value.trim();
    if (!value) return null;

    if (minLength != null && value.length < minLength) {
      throw new Error(
        `${value} does not meet minLength requirement of ${minLength}`
      );
    }

    if (maxLength != null && value.length > maxLength) {
      throw new PublicError(
        `${value} does not meet maxLength requirement of ${maxLength}`
      );
    }

    return value;
  }
};
