var axon = require('@dashersw/axon');
var Message = require('amp-message');

var sock = axon.socket('push', {
    secure: true,
    cipher: 'aes256',
    secret: 'password'
});
 
sock.bind(3000);
console.log('push server started');
 
var i = 0;

setInterval(function(){
  let msg = new Message;
  msg.push('hello');
  msg.push({ counter: i });
  sock.send(msg);
}, 3000);
