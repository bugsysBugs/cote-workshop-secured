# Encrypted Sockets Study

##Inspired by [axon-secure](https://github.com/mgesmundo/axon-secure)
### * node_modules/@dashersw/axon/lib/plugins/security.js - modified with hardcoded cipher and replaced deprecated encryption 
### * node_modules/@dashersw/axon/lib/sockets/sock.js - hardcoded password & enable encryption flag

##Development scripts
### receive.js
### transmit.js

### Problem
#### socket.unpack never get called with cote. 
#### Running both development scripts - unpack get called and encryption works as expected. 
#### DEBUG=axon:sock node receive.js 
#### DEBUG=axon:sock  node transmit.js 

# JWT Authentication/Authorization

##TODO

