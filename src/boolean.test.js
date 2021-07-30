import { strict as assert } from 'assert';

import { resolve } from './boolean.js';

export default {
  matchTrue: () => assert.equal(resolve('t'), true),
  matchFalse: () => assert.equal(resolve('f'), true),
  invalid: () => assert.notEqual(resolve(false), true),
  errors: () => assert.throws(resolve('randomstring')),
}