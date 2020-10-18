const fs = require('fs');
const path = require('path');


const folder = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(folder, (err, files) => {
	if(err) throw err;

	for (var i = 0; i < files.length; i++) {
		if(path.extname(files[i]) === extension){
			console.log(files[i]);
		}
	}
});