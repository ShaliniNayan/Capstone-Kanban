import { countLikes } from './home.js';
describe('Likes Functionality', () => {
  test('Test likes count', () => {
    const newCount = countLikes(2);
    expect(newCount).toBe(3);
  });
});
