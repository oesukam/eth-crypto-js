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
declare const hash: {
    keccak256: typeof keccak256;
};
declare const publicKey: {
    compress: typeof compressPublicKey;
    decomporess: typeof decompressPublicKey;
};
declare const cipher: {
    parse: typeof cipherParser;
    stringify: typeof cipherStringify;
};
export { createPrivateKey, publicKeyByPrivateKey, createIdentity, sign, encryptWithPublicKey, decryptWithPrivateKey, keccak256, cipherParser, cipherStringify, hash, publicKey, cipher, };
