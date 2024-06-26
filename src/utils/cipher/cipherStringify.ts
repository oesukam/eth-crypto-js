import { compressPublicKey } from '../publicKey/compressPublicKey';
import { Cipher } from '../../types/Cipher';

export function cipherStringify(cipher: string | Cipher) {
  if (typeof cipher === 'string') return cipher;

  const compressedKey = compressPublicKey(cipher.ephemPublicKey);

  const ret = Buffer.concat([
    Buffer.from(cipher.iv, 'hex'), // 16bit
    Buffer.from(compressedKey, 'hex'), // 33bit
    Buffer.from(cipher.mac, 'hex'), // 32bit
    Buffer.from(cipher.ciphertext, 'hex'), // var bit
  ]);

  return ret.toString('hex');
}
