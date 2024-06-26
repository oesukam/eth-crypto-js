export function hexToUnit8Array(str: string): Uint8Array {
  return new Uint8Array(Buffer.from(str, 'hex'));
}
