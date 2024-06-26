import { encryptWithPublicKey } from './encryptWithPublicKey';

describe('encryptWithPublicKey', () => {
  test('should return the private key', async () => {
    const keypair = {
      privateKey: '0xb3a4611225c37c6f1cb5414532c87be388f512c00cbcec6cfc5a4c283742796d',
      publicKey:
        'e3421d7f9d6888ea83bef6b28ce0a2ab6eb6fe8a8fbfa3743240992590816b08f9a62edcc63296d056c552054d583fec36d23ef11dffb24c95aaf4a47d50dccc',
    };

    const cipher = await encryptWithPublicKey(keypair.publicKey, 'message');

    expect(cipher.ciphertext).toBeDefined();
    expect(cipher.ephemPublicKey).toBeDefined();
    expect(cipher.iv).toBeDefined();
    expect(cipher.mac).toBeDefined();
  });
});
