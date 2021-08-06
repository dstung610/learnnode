const fs = require('fs');

file = fs.readFileSync(process.argv[2]);
content = file.toString();
lines = content.split('\n');
numberOfNewline = lines.length - 1

console.log(numberOfNewline);