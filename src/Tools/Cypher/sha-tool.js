import CryptoJS from 'crypto-js';

export default function getSHA512(text) {
  return CryptoJS.SHA512(text).toString(CryptoJS.enc.Hex);
}
