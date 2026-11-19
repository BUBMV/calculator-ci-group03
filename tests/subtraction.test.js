import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.js';
test('subtracts two negative numbers', () => {
  // Arrange
  const a = 8;
  const b = 5;
  const expected = 3;
  // Action
  const actual = calculate(a, b, 'subtract');
  // Assert
  assert.equal(actual, expected);
});

