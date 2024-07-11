import { stripHexPrefix } from './util';
import { decrypt } from './encryption-utils';
import { Encrypted } from './types';

export const decryptWithPrivateKey = async (privateKey: string, encrypted: Encrypted) => {
  // remove '0x' from privateKey
  const twoStripped = stripHexPrefix(privateKey);

  const decrypted = await decrypt(twoStripped, encrypted);
  return decrypted;
};
