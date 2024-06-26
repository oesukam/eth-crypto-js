import { ecdsaSign as secp256k1_sign } from 'secp256k1';
import { addLeading0x } from './utils/addLeading0x';
import { removeLeading0x } from './utils/removeLeading0x';

/**
 * signs the given message
 * we do not use sign from eth-lib because the pure secp256k1-version is 90% faster
 * @param  {string} privateKey
 * @param  {string} hash
 * @return {string} hexString
 */
export function sign(privateKey, hash): string {
  hash = addLeading0x(hash);
  if (hash.length !== 66) throw new Error('WallabyCrypto.sign(): Can only sign hashes, given: ' + hash);

  const sigObj = secp256k1_sign(
    new Uint8Array(Buffer.from(removeLeading0x(hash), 'hex')),
    new Uint8Array(Buffer.from(removeLeading0x(privateKey), 'hex')),
  );

  const recoveryId = sigObj.recid === 1 ? '1c' : '1b';

  const newSignature = '0x' + Buffer.from(sigObj.signature).toString('hex') + recoveryId;
  return newSignature;
}
