export function removeLeading0x(str: string): string {
  if (str.startsWith('0x')) return str.substring(2);

  return str;
}
