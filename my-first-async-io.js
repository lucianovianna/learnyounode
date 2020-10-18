const fs = require('fs');


fs.readFile(process.argv[2], 'utf8', finishedReading);

function finishedReading (err, data){
	if(err) throw err;

	let lines = data.split('\n');
	console.log(lines.length - 1);
}