import { sign } from './sign';
import { solidityKeccak256 } from './utils/hash/solidityKeccak256';
import { recoverPublicKey } from './recoverPublicKey';
import { createIdentity } from './createIdentity';

describe('recoverPublicKey', () => {
  test('should return the correct public key', () => {
    const identity = createIdentity();

    const hashed = solidityKeccak256('717ea458b62a430cb37ced7c22ebec97');
    const signature = sign(identity.privateKey, hashed);

    const publicKey = recoverPublicKey(signature, hashed);
    expect(identity.publicKey).toBe(publicKey);
  });
});
