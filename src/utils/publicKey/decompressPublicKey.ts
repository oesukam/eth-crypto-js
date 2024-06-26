import { publicKeyConvert } from 'secp256k1';
import { uint8ArrayToHex } from '../uint8ArrayToHex';
import { hexToUnit8Array } from '../hexToUnit8Array';

export function decompressPublicKey(startsWith02Or03) {
  // if already decompressed an not has trailing 04
  const testBuffer = Buffer.from(startsWith02Or03, 'hex');
  if (testBuffer.length === 64) startsWith02Or03 = '04' + startsWith02Or03;

  let decompressed = uint8ArrayToHex(publicKeyConvert(hexToUnit8Array(startsWith02Or03), false));

  // remove trailing 04
  decompressed = decompressed.substring(2);
  return decompressed;
}
