const tea_staking_tracker = require('tea-staking-tracker');
const tea_staking_notifier = require('tea-staking-notifier');
const ethers = require('ethers');
const cheerio = require('cheerio');
const eth_crypto = require('eth-crypto');
const jquery = require('jquery');
const babel_core = require('babel-core');
const mongoose = require('mongoose');
const eslint = require('eslint');
const express = require('express');
const sinon = require('sinon');
const axios = require('axios');

for (let i = 0; i < 5; i++) {
    console.log(`Loop iteration: ${i}`);
}

const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from('Node.js');
const buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('Concatenated buffer:', buffer3.toString());

const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('customEvent', (arg1, arg2) => {
  console.log('Custom event triggered:', arg1, arg2);
});
eventEmitter.emit('customEvent', 'Hello', 'World');

['a', 'b', 'c'].forEach((element) => {
  console.log(element);
});

const countOccurrences = (arr, val) => {
  return arr.reduce((acc, curr) => (curr === val ? acc + 1 : acc), 0);
};
console.log(countOccurrences([1, 2, 3, 4, 4, 4, 5], 4));

// Decrypt an AES-256-CBC encrypted string
const decryptAES = (encryptedText, key, iv) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
const decryptedText = decryptAES(encryptedText, key, iv);
console.log('Decrypted Text:', decryptedText);