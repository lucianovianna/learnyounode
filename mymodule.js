const fs = require('fs');
const path = require('path');


module.exports = function (dir, extName, callback){
	fs.readdir(dir, (err, files) => {
		if(err) return callback(err);

		files = files.filter(function(file){
			return path.extname(file) === '.' + extName;
		});

		return callback(null, files);
	});
}