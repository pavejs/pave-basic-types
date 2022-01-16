import { strict as assert } from 'assert';

import object from './object.js';

const { resolve } = object;

export default {
  identifiesObj: () => assert.deepEqual(resolve({ value: { foo: 'bar' } }), { foo: 'bar' }),
};
