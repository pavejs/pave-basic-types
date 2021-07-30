import { strict as assert } from 'assert';

import boolean from './boolean.js';

const { resolve } = boolean;

export default {
  matchTrue: () => assert.equal(resolve({ value: 't' }), true),
  matchFalse: () => assert.equal(resolve({ value: 'f' }), false),
  invalid: () => assert.notEqual(resolve({ value: false }), true),
  errors: () => assert.throws(resolve({ value: 'random' }), Error),
}
