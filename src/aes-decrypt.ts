import { enc, lib, AES, mode } from 'crypto-js';
import { bytesToHex } from 'ethereum-cryptography/utils';

export const aes256CbcDecrypt = (iv: string, key: Uint8Array, msg: string) => {
  const cryptoJsIv = enc.Hex.parse(iv);
  const encryptionKey = enc.Hex.parse(bytesToHex(key));

  const cipherText = enc.Hex.parse(msg);
  const cipherParams = lib.CipherParams.create({
    ciphertext: cipherText,
    iv: cryptoJsIv,
    key: encryptionKey,
  });
  const decrypted = AES.decrypt(cipherParams, encryptionKey, {
    mode: mode.CBC,
    iv: cryptoJsIv,
  });
  return decrypted.toString(enc.Utf8);
};
