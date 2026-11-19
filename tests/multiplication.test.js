import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.js';
test('multiplies two positive numbers', () => {

  const a = 4;
  const b = 3;
  const expected = 12;


  const actual = calculate(a, b, 'multiply');

  
  assert.equal(actual, expected);
});