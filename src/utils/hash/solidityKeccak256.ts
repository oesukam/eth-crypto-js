import { keccak256, toUtf8Bytes } from 'ethers';

export function solidityKeccak256(str: string): string {
  const hash = keccak256(toUtf8Bytes(str));

  return hash;
}
