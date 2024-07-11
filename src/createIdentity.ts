import { SigningKey, concat, keccak256 } from 'ethers';
import { getRandomBytes } from 'ethereum-cryptography/random.js';
import { stripHexPrefix } from './util';

/**
 * create a privateKey
 * @return {string}
 */

export const createPrivateKey = async () => {
  const [byteArray1, byteArray2, byteArray3, byteArray4] = await Promise.all([
    getRandomBytes(32),
    getRandomBytes(32),
    getRandomBytes(32),
    getRandomBytes(32),
  ]);
  const innerHex = keccak256(concat([byteArray1, byteArray2]));
  const middleHex = concat([concat([byteArray3, innerHex]), byteArray4]);
  const outerHex = keccak256(middleHex);
  return outerHex;
};

/**
 * creates a new object with
 * private-Key and public-Key
 */

export const createIdentity = async () => {
  const privateKey = await createPrivateKey();
  const sign = new SigningKey(privateKey);
  const walletPublicKey = SigningKey.computePublicKey(sign.publicKey, false);
  const identity = {
    privateKey: privateKey,
    publicKey: stripHexPrefix(walletPublicKey).slice(2),
  };
  return identity;
};
