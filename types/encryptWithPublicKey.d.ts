import { Cipher } from './types/Cipher';
export declare function encryptWithPublicKey(publicKey: string, message: string, opts?: {}): Promise<Cipher>;
