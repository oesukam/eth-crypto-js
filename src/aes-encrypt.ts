import { AES, enc, mode } from 'crypto-js';
import { bytesToHex } from 'ethereum-cryptography/utils';

export const aes256CbcEncrypt = (iv: string, key: Uint8Array, msg: string) => {
  const cryptoJsIv = enc.Hex.parse(iv);

  const keyHex = bytesToHex(key);
  const encryptionKey = enc.Hex.parse(keyHex);

  const encrypted = AES.encrypt(msg, encryptionKey, {
    mode: mode.CBC,
    iv: cryptoJsIv,
  });
  return enc.Hex.stringify(encrypted.ciphertext);
};
