import { compressPublicKey } from '../publicKey/compressPublicKey';
import { Encrypted } from '../../types/Encrypted';

export function cipherStringify(cipher: string | Encrypted) {
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
