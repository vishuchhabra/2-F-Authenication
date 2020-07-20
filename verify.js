var speakeasy = require('speakeasy');

var verified = speakeasy.totp.verify({
    secret: 'GFKUQ3LDG44UC2B7LU2FCRSHKZSHENTO',
    encoding: 'base32',
    token: '309876'
});

console.log(verified)