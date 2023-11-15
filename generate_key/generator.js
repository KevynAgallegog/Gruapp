let secureRandom = require ('secure-random');
let signingKey = secureRandom(256,{type: 'Buffer'});
let base64signigKey = signingKey.toString('base64');
console.log(base64signigKey);