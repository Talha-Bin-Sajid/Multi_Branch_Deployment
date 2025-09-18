const { greet, add } = require('../src/index');

describe('Greet function', () => {
  test('should return greeting message', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});

describe('Add function', () => {
  test('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 5)).toBe(4);
    expect(add(0, 0)).toBe(0);
  });
});