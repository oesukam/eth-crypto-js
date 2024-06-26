import { encryptWithPublicKey } from './encryptWithPublicKey';
import { decryptWithPrivateKey } from './decryptWithPrivateKey';
import { createIdentity } from './createIdentity';

describe('decryptWithPrivateKey', () => {
  test('should encrypt and decrypt with generated identity', async () => {
    const identity = createIdentity();
    const plaintext = 'plaintext';

    const cipher = await encryptWithPublicKey(identity.publicKey, plaintext);
    const decrypted = await decryptWithPrivateKey(identity.privateKey, cipher);

    expect(decrypted).toBe(plaintext);
  });

  test('should decrypt the cipher by the correct private key', async () => {
    const identity = {
      privateKey: '0xcdd44c5f8c8bfa35f6a971af75e63a4e7e2b3023c45b220b4fc8812bb1447ddd',
      publicKey:
        '3d0d868f3f03084325fc7df8cc69095f4a2f44ae2b410f22a5d51bc5943bc1e6b7819431393105290e4807b33f83ed723295c49c07059458688b7ffd686faa7e',
      address: '0x8333D8825367a3c1879CC0AD7f65012D7A7FAfA9',
    };
    const plaintext = 'plaintext';
    const cipher = {
      iv: '2092a904926304c4f68c4f333004fb8d',
      ephemPublicKey:
        '04746368b3e232583fbd3d44c4078f4c89ea9d725172323f28ed477837252463f0b6e90709c51847a38a41114e1d98ba49fe0590288cc28b5a8a0d385ddf4ca6b2',
      ciphertext: '2a9a15a1334d42a3314e9cf7408a1ab6',
      mac: '7836803615e161f03bae67e0f09dbd67ae3b11df905fd47e31420ea2b120a4b0',
    };

    const decrypted = await decryptWithPrivateKey(identity.privateKey, cipher);

    expect(decrypted).toBe(plaintext);
  });
});
