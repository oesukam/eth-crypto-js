import { solidityKeccak256 } from './solidityKeccak256';

describe('solidityKeccak256', () => {
  test('should return the hash', () => {
    const plaintext = '717ea458b62a430cb37ced7c22ebec97';

    const hash1 = solidityKeccak256(plaintext);
    const hash2 = solidityKeccak256(plaintext);

    expect(hash1).toBe(hash2);
  });
});
