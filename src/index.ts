import { createPrivateKey } from './createPrivateKey';
import { publicKeyByPrivateKey } from './publicKeyByPrivateKey';
import { createIdentity } from './createIdentity';
import { sign } from './sign';
import { encryptWithPublicKey } from './encryptWithPublicKey';
import { decryptWithPrivateKey } from './decryptWithPrivateKey';
import { recoverPublicKey } from './recoverPublicKey';

import { solidityKeccak256 as keccak256 } from './utils/hash/solidityKeccak256';
import { compressPublicKey } from './utils/publicKey/compressPublicKey';
import { decompressPublicKey } from './utils/publicKey/decompressPublicKey';
import { cipherParser } from './utils/cipher/cipherParser';
import { cipherStringify } from './utils/cipher/cipherStringify';

import { Encrypted } from './types/Encrypted';

const hash = {
  keccak256,
};

const publicKey = {
  compress: compressPublicKey,
  decomporess: decompressPublicKey,
};

const cipher = {
  parse: cipherParser,
  stringify: cipherStringify,
};

export {
  createPrivateKey,
  publicKeyByPrivateKey,
  createIdentity,
  sign,
  encryptWithPublicKey,
  decryptWithPrivateKey,
  recoverPublicKey,
  keccak256,
  cipherParser,
  cipherStringify,
  hash,
  publicKey,
  cipher,
  Encrypted,
};

export default {
  createPrivateKey,
  publicKeyByPrivateKey,
  createIdentity,
  sign,
  encryptWithPublicKey,
  decryptWithPrivateKey,
  recoverPublicKey,
  keccak256,
  cipherParser,
  cipherStringify,
  hash,
  publicKey,
  cipher,
};
