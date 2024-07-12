import { SigningKey, concat, keccak256 } from 'ethers';
import { getRandomBytes, getRandomBytesSync } from 'ethereum-cryptography/random.js';
import { stripHexPrefix } from './util';

/**
 * create a privateKey
 * @return {string}
 */

export const createPrivateKey = () => {
  const innerHex = keccak256(concat([getRandomBytesSync(32), getRandomBytesSync(32)]));
  const middleHex = concat([concat([getRandomBytesSync(32), innerHex]), getRandomBytesSync(32)]);
  const outerHex = keccak256(middleHex);
  return outerHex;
};

/**
 * creates a new object with
 * private-Key and public-Key
 */

export const createIdentity = () => {
  const privateKey = createPrivateKey();
  const sign = new SigningKey(privateKey);
  const walletPublicKey = SigningKey.computePublicKey(sign.publicKey, false);
  const identity = {
    privateKey: privateKey,
    publicKey: stripHexPrefix(walletPublicKey).slice(2),
  };
  return identity;
};

/** Experimental - using async API could improve performance on mobile by using promise.all */

export const createPrivateKeyAsync = async () => {
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

export const createIdentityAsync = async () => {
  const privateKey = await createPrivateKeyAsync();
  const sign = new SigningKey(privateKey);
  const walletPublicKey = SigningKey.computePublicKey(sign.publicKey, false);
  const identity = {
    privateKey: privateKey,
    publicKey: stripHexPrefix(walletPublicKey).slice(2),
  };
  return identity;
};
