import { strict as assert } from 'assert';

import time from './time.js';

const { resolve } = time;

export default {
  matchNull: () => assert.equal(resolve(' '), null),
  valid: () => assert.ok(resolve('00:00:00.000Z')),
  errors: () => assert.throws(resolve('randomstring')),
}