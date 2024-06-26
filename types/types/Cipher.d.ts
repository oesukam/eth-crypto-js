export interface Cipher {
    iv: string;
    ephemPublicKey: string;
    mac: string;
    ciphertext: string;
}
