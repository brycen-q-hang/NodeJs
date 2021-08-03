var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/readme.txt", {
    encoding: "utf8",
    highWaterMark: 16 * 1024 //32KB (chia du lieu thanh nhieu phan bang nhau, moi phan la 32KB)
});

var writeable = fs.createWriteStream(__dirname + "/readme2copy.txt");
var compress = fs.createWriteStream(__dirname + "/readme.txt.gz");

var gzip = zlib.createGzip();

//copy
readable.pipe(writeable);

//compress
readable.pipe(gzip).pipe(compress);