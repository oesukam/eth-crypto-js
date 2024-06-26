import { privateToPublic, toBuffer } from 'ethereumjs-util';
import { addLeading0x } from './utils/addLeading0x';

/**
 * Generate publicKey from the privateKey with leading 0x.
 * @returns {string}
 */
export function publicKeyByPrivateKey(privateKey: string): string {
  const privateKeyWithLeading0x = addLeading0x(privateKey);

  const publicKeyBuffer = privateToPublic(toBuffer(privateKeyWithLeading0x));

  return publicKeyBuffer.toString('hex');
}
