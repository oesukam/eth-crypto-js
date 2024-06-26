import { cipherParser } from './cipherParser';
import { cipherStringify } from './cipherStringify';

describe('cipherParser', () => {
  const cipher = {
    iv: 'b11155c9f79c3d9b0393fb5fa261fe1e',
    ephemPublicKey:
      '04c8c4c61cf4f9ce93f27edfafc1504ad9f27ca2f0420980876add9c681f98cab117ccc3b6f64c853cb7a8130611a0b3b9cb5c4bbfc7fbf43d7d949c0ca6e790c8',
    ciphertext: 'dd66a640c99654a3ae4446565149a3cb',
    mac: '7d80e9b5051850a3eee98c8674370521a3c05d3794b88bf21eac71dd54577cc3',
  };

  it('should return the cipher if the input is a string', () => {
    const cipherString = cipherStringify(cipher);

    const result = cipherParser(cipherString);
    expect(result.ciphertext).toBeDefined();
  });

  it('should return the same cipher if the input is a cipher', () => {
    const result = cipherParser(cipher);

    expect(result).toBe(cipher);
  });
});
