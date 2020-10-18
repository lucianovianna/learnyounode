const http = require('http');
const bl = require('bl');


const link = process.argv[2];

// -> with only http module

// http.get(link, (res) => {
// 	res.setEncoding('utf8');
// 	let foundedData = '';
// 	res.on('data', (chunk) => foundedData += chunk);
// 	res.on('error', console.error);
// 	res.on('end', () => {
// 		console.log(foundedData.length);
// 		console.log(foundedData);
// 	});
// }).on('error', console.error);


// -> with http and bl module

http.get(link, (res) => {
	res.pipe(bl((err, data) => {
		if(err) return console.error(err);

		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
});