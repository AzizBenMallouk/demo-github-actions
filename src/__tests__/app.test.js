// src/__tests__/app.test.js
import { describe, it, expect } from 'vitest';
import { sum } from '../App';

describe('sum', () => {
  it('additionne deux nombres', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(0, 0)).toBe(0);
    expect(sum(-1, 1)).toBe(0);
  });
});
