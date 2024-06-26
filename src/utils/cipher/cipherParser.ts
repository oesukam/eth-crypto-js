import { Cipher } from '../../types/Cipher';
import { decompressPublicKey } from '../publicKey/decompressPublicKey';

export function cipherParser(str: string | Cipher): Cipher {
  if (typeof str !== 'string') {
    return str;
  }

  const buf = Buffer.from(str, 'hex');

  const ret = {
    iv: buf.toString('hex', 0, 16),
    ephemPublicKey: buf.toString('hex', 16, 49),
    mac: buf.toString('hex', 49, 81),
    ciphertext: buf.toString('hex', 81, buf.length),
  };

  ret.ephemPublicKey = `04${decompressPublicKey(ret.ephemPublicKey)}`;

  return ret;
}
