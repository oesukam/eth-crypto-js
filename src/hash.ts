import { solidityPackedKeccak256 } from 'ethers';

export interface Param {
  type: string;
  value: string;
}

export const keccak256 = (params: Param[] | string): string => {
  const types: string[] = [];
  const values: string[] = [];

  if (typeof params === 'string') {
    types.push('string');
    values.push(params);
  } else {
    params.forEach((p: Param) => {
      types.push(p.type);
      values.push(p.value);
    });
  }

  return solidityPackedKeccak256(types, values);
};

export const SIGN_PREFIX = '\x19Ethereum Signed Message:\n32';
