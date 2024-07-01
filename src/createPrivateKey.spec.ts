import { createPrivateKey } from './createPrivateKey';

describe('createPrivateKey', () => {
  describe('without entropy', () => {
    test('should return the private key', () => {
      const privateKey = createPrivateKey();

      expect(privateKey).toBeDefined();
      expect(privateKey.length).toBe(66);
    });
  });

  describe('with entropy', () => {
    test('should throw entropy size', () => {
      const entropy = Buffer.from('717ea458b62a430cb37ced7c22ebec97');
      expect(() => createPrivateKey(entropy)).toThrowError();
    });

    test('should return the private key', () => {
      const entropy = Buffer.from(
        '717ea458b62a430cb37ced7c22ebec97717ea458b62a430cb37ced7c22ebec97717ea458b62a430cb37ced7c22ebec97717ea458b62a430cb37ced7c22ebec97',
      );

      const privateKey = createPrivateKey(entropy);

      expect(privateKey).toBeDefined();
      expect(privateKey.length).toBe(66);
    });
  });
});
