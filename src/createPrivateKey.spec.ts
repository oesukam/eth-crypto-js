import { createPrivateKey } from './createPrivateKey';

describe('createPrivateKey', () => {
  describe('without entropy', () => {
    test('should return the private key', () => {
      const privateKey = createPrivateKey();

      expect(privateKey).toBeDefined();
      expect(privateKey.length).toBe(66);
    });
  });
});
