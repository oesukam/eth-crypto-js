import { createPrivateKey } from './createPrivateKey';
import { publicKeyByPrivateKey } from './publicKeyByPrivateKey';

describe('publicKeyByPrivateKey', () => {
  describe('without entropy', () => {
    test('should return the public key', () => {
      const privateKey = createPrivateKey();
      const publicKey = publicKeyByPrivateKey(privateKey);

      expect(publicKey).toBeDefined();
      expect(publicKey.length).toBe(128);
    });

    test('should return the same public key of a given private key', () => {
      const keyPair = {
        privateKey: '0xb3a4611225c37c6f1cb5414532c87be388f512c00cbcec6cfc5a4c283742796d',
        publicKey:
          'e3421d7f9d6888ea83bef6b28ce0a2ab6eb6fe8a8fbfa3743240992590816b08f9a62edcc63296d056c552054d583fec36d23ef11dffb24c95aaf4a47d50dccc',
      };
      const publicKey = publicKeyByPrivateKey(keyPair.privateKey);

      expect(publicKey).toBeDefined();
      expect(publicKey.length).toBe(128);
      expect(publicKey).toBe(keyPair.publicKey);
    });
  });
});
