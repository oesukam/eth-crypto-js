import { createIdentity } from './createIdentity';
import { sign } from './sign';
import { encryptWithPublicKey } from './encryptWithPublicKey';
import { decryptWithPrivateKey } from './decryptWithPrivateKey';
import { keccak256 } from './hash';
import { publicKeyByPrivateKey } from './publicKeyByPrivateKey';
import { recoverPublicKey } from './recoverPublicKey';
import { Encrypted } from './types';

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
  recoverPublicKey,
  sign,
  Encrypted,
};

export default {
  createIdentity,
  decryptWithPrivateKey,
  encryptWithPublicKey,
  hash,
  keccak256,
  publicKeyByPrivateKey,
  recoverPublicKey,
  sign,
};
