import { decrypt } from 'eccrypto';
import { removeLeading0x } from './utils/removeLeading0x';
import { cipherParser } from './utils/cipher/cipherParser';

export async function decryptWithPrivateKey(privateKey: string, encrypted): Promise<string> {
  encrypted = cipherParser(encrypted);

  // remove trailing '0x' from privateKey
  const twoStripped = removeLeading0x(privateKey);

  const encryptedBuffer = {
    iv: Buffer.from(encrypted.iv, 'hex'),
    ephemPublicKey: Buffer.from(encrypted.ephemPublicKey, 'hex'),
    ciphertext: Buffer.from(encrypted.ciphertext, 'hex'),
    mac: Buffer.from(encrypted.mac, 'hex'),
  };

  return decrypt(Buffer.from(twoStripped, 'hex'), encryptedBuffer).then((decryptedBuffer) =>
    decryptedBuffer.toString(),
  );
}
