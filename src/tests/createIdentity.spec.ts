import { createIdentity, createPrivateKey } from '../createIdentity';

describe('createIdentity tests', () => {
  it('should return an object with privateKey and publicKey', async () => {
    const identity = createIdentity();
    expect(identity).toHaveProperty('privateKey');
    expect(identity).toHaveProperty('publicKey');
  });

  it('should return a valid hex string with correct length', () => {
    const privateKey = createPrivateKey();
    expect(privateKey).toMatch(/^0x[0-9a-fA-F]+$/);
    // Length of keccak256 hash in hex plus '0x' prefix
    expect(privateKey.length).toBe(66);
  });

  it('privateKey and publicKey should have valid lengths', async () => {
    const identity = createIdentity();
    // Assuming specific lengths for privateKey and publicKey based on common standards
    expect(identity.privateKey.length).toBe(66); // Length of keccak256 hash in hex plus '0x' prefix
    // This length check for publicKey might need adjustment based on actual expected length
    expect(identity.publicKey.length).toBeGreaterThanOrEqual(64); // Minimum length check for publicKey
  });
});
