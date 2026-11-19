
import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.js';

test('handles division by zero', () => {
  // Arrange
  const a = 10;
  const b = 0;

  // Action & Assert
  assert.throws(() => {
    calculate(a, b, 'divide');
  }, /Cannot divide by zero/i);
});
