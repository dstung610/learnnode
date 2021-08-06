const path = require('path');
const fs = require('fs');

module.exports = function readFolder(dirPath, ext, callback) {
    fs.readdir(dirPath, (err, list) => {
        if (err) {
            return callback(err);
        }
        var results = [];
        var extension = '.' + ext;
        list.forEach((curr) => {
            if (path.extname(curr) === extension) {
                results.push(path.basename(curr));
            }
        })
        callback(null, results);
    })
}