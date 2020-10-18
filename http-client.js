const http = require('http');


const link = process.argv[2];

var getReq = http.get(link, (response) => {
	response.setEncoding('utf8');

	response.on('data', (chunk) => {
		console.log(chunk);
	});
	response.on('error', console.error);

});

getReq.on('error', console.error);
