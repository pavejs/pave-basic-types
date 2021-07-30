import { strict as assert } from 'assert';

import time from './time.js';

const { resolve } = time;

export default {
  matchNull: () => assert.equal(resolve({ value: ' ' }), null),
  valid: () => assert.ok(resolve({ value: '00:00:00.000Z' })),
  errors: () => assert.fail(resolve({ value: 'randomstring' }), { name: Error } ),
}
