var axon = require('@dashersw/axon');
var sock = axon.socket('pull', {
     secure: true,
     secret: 'password'
 });
 
sock.connect(3000);
 
sock.on('message', function(msg){
  console.log('MESSAGE : ',msg);
});
