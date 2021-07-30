import { strict as assert } from 'assert';

import string from './string.js';

const { resolve } = string;

export default {
  matchNull: () => assert.equal(resolve({ value: ' ', args: {} }), null),
  trim: () => assert.equal(resolve({ value: ' trimmed ', args: {} }), 'trimmed'),
  dontTrim: () => assert.equal(resolve({ value: ' trimmed ', args: { trim: false } }), ' trimmed '),
  conversion: () => assert.equal(resolve({ value: 24, args: {} }), '24'),
  errorsNotCorrectType: () => assert.throws(resolve({ value: {}, args: {} }), { name: Error } ),
  errorsExceedsMaxLength: () => assert.throws(resolve({ value: 'super long string', args: { maxLength: 1 } }), { name: Error } ),
  errorsUnderMinLength: () => assert.throws(resolve({ value: 'short', args: { maxLength: 10 } }), { name: Error } ),
}
