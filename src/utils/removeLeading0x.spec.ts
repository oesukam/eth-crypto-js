import { removeLeading0x } from './removeLeading0x';

describe('removeLeading0x', () => {
  test('should remove the leading 0x', () => {
    const str = '0x717ea458b62a430cb37ced7c22ebec97';
    expect(removeLeading0x(str)).toBe('717ea458b62a430cb37ced7c22ebec97');
  });

  test('should return the same string', () => {
    const str = '717ea458b62a430cb37ced7c22ebec97';
    expect(removeLeading0x(str)).toBe(str);
  });
});
