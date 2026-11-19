import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/calculator.js';

test('adds two positive numbers', () => {
  // Arrange
  const a = 2;
  const b = 3;
  const expected = 5;
  // Action
  const actual = calculate(a, b, 'add');
  // Assert
  assert.equal(actual, expected);
});
