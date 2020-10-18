const mymodule = require('./mymodule.js');


const dir = process.argv[2];
const extName = process.argv[3];

mymodule(dir, extName, (err, files) => {
	if(err) console.log('There was an error:\n', err);

	files.forEach((file) => {
		console.log(file);
	});
});