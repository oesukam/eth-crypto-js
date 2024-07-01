import { keccak256, concat, randomBytes } from 'ethers';

const MIN_ENTROPY_SIZE = 128;

export function createPrivateKey(entropy?: Buffer): string {
  if (entropy) {
    if (Buffer.byteLength(entropy, 'utf8') < MIN_ENTROPY_SIZE) {
      throw new Error(
        `WallabyCrypto.createPrivateKey(): Entropy-size must be at least ${MIN_ENTROPY_SIZE} but was ${Buffer.byteLength(entropy, 'utf8')}`,
      );
    }

    const outerHex = keccak256(entropy);
    return outerHex;
  }

  const innerHex = keccak256(concat([randomBytes(32), randomBytes(32)]));
  const middleHex = concat([concat([randomBytes(32), innerHex]), randomBytes(32)]);
  const outerHex = keccak256(middleHex);
  return outerHex;
}
