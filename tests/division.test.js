import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.js';
test('divides two numbers', () => {
  
  const a = 10;
  const b = 2;
  const expected = 5;


  const actual = calculate(a, b, 'divide');


  assert.equal(actual, expected);
});