const http = require('http');
const bl = require('bl');


let collectedData = [];
let count = 2;

for (var i = 2; i < process.argv.length; i++) {
	iRequest(i);
}

function iRequest (index){
	http.get(process.argv[i], (res) => {
		res.pipe(bl((err, data) => {
			if(err) return console.error(err);

			collectedData[index-2] = data.toString();
			count++;
			if(count === process.argv.length)
				return printData();
		}));
	});
}

function printData () {
	collectedData.forEach((data) => {
		console.log(data);
	});
}


