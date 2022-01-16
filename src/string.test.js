import { strict as assert } from 'assert';

import string from './string.js';

const { resolve } = string;

export default {
  match: () => assert.equal(resolve({ value: 'str', args: {} }), 'str'),
  conversion: () => assert.equal(resolve({ value: 24, args: {} }), '24'),
}
