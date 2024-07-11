import { createIdentity } from './createIdentity';
import { sign } from './sign';
import { encryptWithPublicKey } from './encryptWithPublicKey';
import { decryptWithPrivateKey } from './decryptWithPrivateKey';
import { keccak256 } from './hash';
import { Encrypted } from './types';
import { publicKeyByPrivateKey } from './publicKeyByPrivateKey';

const hash = {
  keccak256,
};

export {
  createIdentity,
  decryptWithPrivateKey,
  encryptWithPublicKey,
  hash,
  keccak256,
  publicKeyByPrivateKey,
  sign,
  Encrypted,
};
