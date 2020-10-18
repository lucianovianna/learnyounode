// TCP time server
const net = require('net');
const strftime = require('strftime');


const portNumber = Number(process.argv[2]);

const server = net.createServer((socket) => {
	// the same of: socket.write(); + socket.end();
	socket.end(strftime('%F %H:%M\n', new Date())); 
});
server.on('error', console.error);
server.listen(portNumber);

