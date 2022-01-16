import { strict as assert } from 'assert';

import number from './number.js';

const { resolve } = number;

export default {
  matchNull: () => assert.equal(resolve({ value: ' ' }), null),
  conversion: () => assert.equal(resolve({ value: '24' }), 24),
  identifiesNum: () => assert.equal(resolve({ value: 3 }), 3),
};
