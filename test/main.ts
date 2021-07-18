import crypto from 'crypto';

console.log(crypto.createHash('sha256').update("1234").digest('hex'));