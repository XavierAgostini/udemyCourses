var crypto = require('crypto-js');

var secretMesssage = {
	name: 'Andrew',
	secretName: '007'
};

var secretKey = '123abc';
// Encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMesssage), secretKey);
console.log('Encrypted Message: ' + encryptedMessage);

// Decrypt
var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log('Decrypted Message: ' + decryptedMessage.name);