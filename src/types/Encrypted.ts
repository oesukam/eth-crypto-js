export interface Encrypted {
  iv: string;
  ephemPublicKey: string;
  mac: string;
  ciphertext: string;
}
