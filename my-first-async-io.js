const fs = require('fs');

const file = fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    processData(data);
})


function processData(data) {
    content = data.toString();
    lines = content.split('\n');
    numberOfNewline = lines.length - 1

    console.log(numberOfNewline)
};