import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.js';
test('adds two negative numbers', () => {
  const a = -2;
  const b = -3;
  const expected = -5;
  const actual = calculate(a, b, 'add');
  assert.equal(actual, expected);
});
