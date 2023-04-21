import CryptoJS from 'crypto-js';

const secretKey = 'my-secret-key';

export function encryptData(data: any) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
}

export function decryptData(encryptedData: any) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}
