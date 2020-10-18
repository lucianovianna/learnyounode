const http = require('http');
const fs = require('fs');


const _portNumber = process.argv[2];
const _dir = process.argv[3];

const server = http.createServer((req, res) => {
	res.writeHead('200', { 'Content-Type' : 'text/plain'});
	fs.createReadStream(_dir).pipe(res);
});
server.listen(_portNumber);
server.on('error', console.error);

