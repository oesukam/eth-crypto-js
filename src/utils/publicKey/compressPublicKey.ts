import { publicKeyConvert } from 'secp256k1';
import { hexToUnit8Array } from '../hexToUnit8Array';
import { uint8ArrayToHex } from '../uint8ArrayToHex';

export function compressPublicKey(startsWith04) {
  // add trailing 04 if not done before
  const testBuffer = Buffer.from(startsWith04, 'hex');
  if (testBuffer.length === 64) startsWith04 = '04' + startsWith04;

  return uint8ArrayToHex(publicKeyConvert(hexToUnit8Array(startsWith04), true));
}
