import { createIdentity, createPrivateKey } from '../createIdentity';

describe('createIdentity tests', () => {
  it('should return an object with privateKey and publicKey', async () => {
    const identity = await createIdentity();
    expect(identity).toHaveProperty('privateKey');
    expect(identity).toHaveProperty('publicKey');
  });

  it('should return a string', async () => {
    const privateKey = await createPrivateKey();
    expect(typeof privateKey).toBe('string');
  });

  it('should return a valid hex string', async () => {
    const privateKey = await createPrivateKey();
    expect(privateKey).toMatch(/^0x[0-9a-fA-F]+$/);
  });

  it('should return a string of correct length', async () => {
    const privateKey = await createPrivateKey();
    // Length of keccak256 hash in hex plus '0x' prefix
    expect(privateKey.length).toBe(66);
  });

  it('should return an object with privateKey and publicKey', async () => {
    const identity = await createIdentity();
    expect(identity).toHaveProperty('privateKey');
    expect(identity).toHaveProperty('publicKey');
    expect(typeof identity.privateKey).toBe('string');
    expect(typeof identity.publicKey).toBe('string');
  });

  it('privateKey and publicKey should have valid lengths', async () => {
    const identity = await createIdentity();
    // Assuming specific lengths for privateKey and publicKey based on common standards
    expect(identity.privateKey.length).toBe(66); // Length of keccak256 hash in hex plus '0x' prefix
    // This length check for publicKey might need adjustment based on actual expected length
    expect(identity.publicKey.length).toBeGreaterThanOrEqual(64); // Minimum length check for publicKey
  });
});
