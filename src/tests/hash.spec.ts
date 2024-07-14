import { keccak256 } from '../hash';

const message = '81cad6c9647943ed9b9d1f70f25acbbf';

describe('keccak256 function', () => {
  it('should correctly hash a single string', () => {
    const expectedHashPattern = /^0x[0-9a-fA-F]{64}$/; // Assuming keccak256 returns a hex string of 64 characters
    const result = keccak256(message);
    expect(result).toMatch(expectedHashPattern);
  });

  it('should correctly hash params', () => {
    const result = keccak256([{ type: 'uint256', value: 1337 }]);
    expect(result).toEqual('0x64525377d0e4fdc0b5cb83d111f37debd7efc1f40a572ff8a92bbeeb587a5603');
  });
});
