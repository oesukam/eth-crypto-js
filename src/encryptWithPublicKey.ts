import { encrypt } from 'eccrypto';
import { Encrypted } from './types/Encrypted';
import { decompressPublicKey } from './utils/publicKey/decompressPublicKey';

export async function encryptWithPublicKey(publicKey: string, message: string, opts = {}): Promise<Encrypted> {
  const decompressedPublicKey = decompressPublicKey(publicKey);

  const pubString = `04${decompressedPublicKey}`;

  return encrypt(Buffer.from(pubString, 'hex'), Buffer.from(message), opts).then((encryptedBuffers) => {
    const encrypted = {
      iv: encryptedBuffers.iv.toString('hex'),
      ephemPublicKey: encryptedBuffers.ephemPublicKey.toString('hex'),
      ciphertext: encryptedBuffers.ciphertext.toString('hex'),
      mac: encryptedBuffers.mac.toString('hex'),
    };
    return encrypted;
  });
}
