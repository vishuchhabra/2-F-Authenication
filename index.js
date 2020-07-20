var speakeasy = require('speakeasy');
var QRCode = require('qrcode');


var secret = speakeasy.generateSecret({length: 20,name:"vishu chhabra site"});
console.log(secret.base32); 

QRCode.toDataURL(secret.otpauth_url, function(err, image_data) {
    console.log(image_data); // A data URI for the QR code image
});

