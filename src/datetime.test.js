import { strict as assert } from 'assert';

import datetime from './datetime.js';

const { resolve } = datetime;

export default {
  matchNull: () => assert.equal(resolve({ value: ' ' }), null),
  valid: () => assert.ok(resolve({ value: '2021-01-01T00:00:00.000Z' })),
}
