import { countComment } from './popup.js';

describe('Comments Functionality', () => {
  test('Test comments count', () => {
    const newCount = countComment(2);
    expect(newCount).toBe(3);
  });
});