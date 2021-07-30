import { strict as assert } from 'assert';

import string from './string.js';

const { resolve } = string;

export default {
  matchNull: () => assert.equal(resolve({ value: ' ' }), null),
  trim: () => assert.equal(resolve({ value: ' trimmed ' }), 'trimmed'),
  dontTrim: () => assert.equal(resolve({ value: ' trimmed ', args: { trim: false } }), ' trimmed '),
  conversion: () => assert.equal(resolve({ value: 24 }), '24'),
  errorsNotCorrectType: () => assert.throws(resolve({ value: {} }), Error),
  errorsExceedsMaxLength: () => assert.throws(resolve({ value: 'super long string', args: { maxLength: 1 } }), Error),
  errorsUnderMinLength: () => assert.throws(resolve({ value: 'short', args: { maxLength: 10 } }), Error),
}
