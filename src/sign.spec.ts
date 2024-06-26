import { createPrivateKey } from './createPrivateKey';
import { sign } from './sign';
import { solidityKeccak256 } from './utils/hash/solidityKeccak256';

describe('sign', () => {
  describe('without entropy', () => {
    test('should return the signature', () => {
      const privateKey = createPrivateKey();
      const hashed = solidityKeccak256('717ea458b62a430cb37ced7c22ebec97');
      const signature = sign(privateKey, hashed);
      expect(signature).toBeDefined();
    });

    test('should return the same signature for the same hash', () => {
      const privateKey = createPrivateKey();
      const hashed = solidityKeccak256('717ea458b62a430cb37ced7c22ebec97');
      const signature1 = sign(privateKey, hashed);
      const signature2 = sign(privateKey, hashed);

      expect(signature1).toBeDefined();
      expect(signature2).toBeDefined();
      expect(signature1).toBe(signature2);
    });
  });
});
