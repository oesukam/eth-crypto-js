import { createPrivateKey } from './createPrivateKey';
import { publicKeyByPrivateKey } from './publicKeyByPrivateKey';
import { createIdentity } from './createIdentity';
import { sign } from './sign';
import { encryptWithPublicKey } from './encryptWithPublicKey';
import { decryptWithPrivateKey } from './decryptWithPrivateKey';

import { solidityKeccak256 as keccak256 } from './utils/hash/solidityKeccak256';
import { compressPublicKey } from './utils/publicKey/compressPublicKey';
import { decompressPublicKey } from './utils/publicKey/decompressPublicKey';
import { cipherParser } from './utils/cipher/cipherParser';
import { cipherStringify } from './utils/cipher/cipherStringify';

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
  keccak256,
  cipherParser,
  cipherStringify,
  hash,
  publicKey,
  cipher,
};
