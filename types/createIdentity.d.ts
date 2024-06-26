/// <reference types="node" />
export interface Identity {
    privateKey: string;
    publicKey: string;
    address: string;
}
export declare const createIdentity: (entropy?: Buffer) => Identity;
