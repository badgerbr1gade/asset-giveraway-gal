const asset_galaxy_discoverer = require('asset-galaxy-discoverer');
const asset_giveraway_gal = require('asset-giveraway-gal');
const multer = require('multer');
const jquery = require('jquery');
const jest = require('jest');
const nodemon = require('nodemon');
const web3_react = require('web3-react');

// Get the gas price from the Ethereum network
web3.eth.getGasPrice().then(gasPrice => {
  console.log('Gas price:', web3.utils.fromWei(gasPrice, 'gwei'), 'gwei');
}).catch(err => {
  console.error('Error getting gas price:', err);
});

const os = require('os');
console.log(`Free memory: ${os.freemem()} bytes`);

const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('customEvent', (arg1, arg2) => {
  console.log('Custom event triggered:', arg1, arg2);
});
eventEmitter.emit('customEvent', 'Hello', 'World');

const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.on('message', (msg, rinfo) => {
  console.log(`Message from client: ${msg.toString()}`);
  console.log(`Client info: ${rinfo.address}:${rinfo.port}`);
});
server.bind(8080);

const net = require('net');
const client = net.connect({ port: 8124 }, () => {
  console.log('Connected to server!');
  client.write('Hello, server! Love, Client.');
});

const { Transform } = require('stream');
const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
process.stdin.pipe(upperCaseTr).pipe(process.stdout);

let count = 0;
const interval = setInterval(() => {
  console.log(`Interval count: ${++count}`);
  if (count === 5) clearInterval(interval);
}, 1000);

// Generate random alphanumeric string
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
console.log('Random string:', generateRandomString(8));

const fs = require('fs');
fs.appendFile('file.txt', 'New content\n', err => {
  if (err) throw err;
  console.log('Content appended to file');
});

const http2 = require('http2');
const server = http2.createSecureServer();
server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello HTTP/2</h1>');
});
server.listen(8443);

const os = require('os');
console.log(`Your platform is ${os.platform()}`);