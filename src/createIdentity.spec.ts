import { createIdentity } from './createIdentity';

describe('createIdentity', () => {
  describe('without entropy', () => {
    test('should return the pair keys and wallet address', () => {
      const identity = createIdentity();

      expect(identity.address).toBeDefined();
      expect(identity.privateKey).toBeDefined();
      expect(identity.publicKey).toBeDefined();

      expect(identity.address.length).toBe(42);
      expect(identity.privateKey.length).toBe(66);
      expect(identity.publicKey.length).toBe(128);
    });
  });
});
