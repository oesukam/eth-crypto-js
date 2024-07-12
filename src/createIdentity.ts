import { SigningKey, concat, keccak256, randomBytes } from 'ethers';
import { stripHexPrefix } from './util';

/**
 * create a privateKey
 * @return {string}
 */

export const createPrivateKey = () => {
  const innerHex = keccak256(concat([randomBytes(32), randomBytes(32)]));
  const middleHex = concat([concat([randomBytes(32), innerHex]), randomBytes(32)]);
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
