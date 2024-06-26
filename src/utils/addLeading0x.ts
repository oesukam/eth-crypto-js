export function addLeading0x(str: string) {
  if (!str.startsWith('0x')) return '0x' + str;

  return str;
}
