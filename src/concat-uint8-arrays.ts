/** Helper function to concat UInt8Arrays mimicking the behaviour of the
 *  Buffer.concat function in Node.js
 */

export const concatUint8Arrays = (uint8arrays: Uint8Array[]) => {
  const totalLength = uint8arrays.reduce((total, uint8array) => total + uint8array.byteLength, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  uint8arrays.forEach((uint8array) => {
    result.set(uint8array, offset);
    offset += uint8array.byteLength;
  });
  return result;
};
