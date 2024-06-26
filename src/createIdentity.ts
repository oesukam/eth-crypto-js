import { Wallet } from 'ethers';
import { createPrivateKey } from './createPrivateKey';
import { publicKeyByPrivateKey } from './publicKeyByPrivateKey';

export interface Identity {
  privateKey: string;
  publicKey: string;
  address: string;
}

export const createIdentity = (entropy?: Buffer): Identity => {
  const privateKey = createPrivateKey(entropy);
  const wallet = new Wallet(privateKey);

  const identity = {
    privateKey: privateKey,
    publicKey: publicKeyByPrivateKey(privateKey),
    address: wallet.address,
  };

  return identity;
};
