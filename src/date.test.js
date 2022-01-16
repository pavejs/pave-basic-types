import { strict as assert } from 'assert';

import date from './date.js';

const { resolve } = date;

export default {
  matchNull: () => assert.equal(resolve({ value: ' ' }), null),
  valid: () => assert.ok(resolve({ value: '2021-01-01' })),
}
