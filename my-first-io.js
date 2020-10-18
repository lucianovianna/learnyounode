const fs = require('fs');


const file = fs.readFileSync(process.argv[2]); // buffer
const fileStr = file.toString(); // buffer to string
//console.log(fileStr);

var found = fileStr.split('\n');

console.log(found.length - 1); // number of jumped lines