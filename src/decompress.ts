import { hexToBytes } from 'ethereum-cryptography/utils';

export const decompress = (startsWith02Or03: string) => {
  const testByteArray = hexToBytes(startsWith02Or03);
  let startsWith04 = startsWith02Or03;
  if (testByteArray.length === 64) {
    startsWith04 = '04' + startsWith02Or03;
  }
  return startsWith04.substring(2);
};
