import { SigningKey } from 'ethers';
import { addLeading0x, stripHexPrefix } from './util';

/**
 * Generate publicKey from the privateKey.
 * This creates the uncompressed publicKey,
 * where 04 has stripped from left
 * @returns {string}
 */
export const publicKeyByPrivateKey = (privateKey: string) => {
  const key = addLeading0x(privateKey);
  const sign = new SigningKey(key);
  const publicKey = SigningKey.computePublicKey(sign.publicKey, false);
  return stripHexPrefix(publicKey).slice(2);
};
