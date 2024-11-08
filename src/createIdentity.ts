import { SigningKey, concat, keccak256, randomBytes } from 'ethers';
import { stripHexPrefix } from './util';

export const DEFAULT_ENTROPY_BYTES = 32;

/**
 * creates a new private key
 * @param { Uint8Array } entropy - optional entropy to create the private key
 * @returns a new private key
 */
export const createPrivateKey = (entropy?: Uint8Array)  => {
  if (entropy) {
    if (!(entropy instanceof Uint8Array) || entropy.length < DEFAULT_ENTROPY_BYTES) {
      throw new Error(`entropy must be a Uint8Array of at least ${DEFAULT_ENTROPY_BYTES} bytes`);
    }

    return keccak256(entropy);
  } else {
    const innerHex = keccak256(concat([randomBytes(32), randomBytes(32)]));
    const middleHex = concat([concat([randomBytes(32), innerHex]), randomBytes(32)]);
    const outerHex = keccak256(middleHex);
    return outerHex;
  }
};

/**
 * creates a new identity
 * @param { Uint8Array } entropy - optional entropy to create the private key
 * @returns a new pair of private and public key
 */
export const createIdentity = (entropy?: Uint8Array) => {
  const privateKey = createPrivateKey(entropy);

  const sign = new SigningKey(privateKey);
  const walletPublicKey = SigningKey.computePublicKey(sign.publicKey, false);
  const identity = {
    privateKey: privateKey,
    publicKey: stripHexPrefix(walletPublicKey).slice(2),
  };
  return identity;
};
