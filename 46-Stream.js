var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/readme.txt", {
    encoding: "utf8",
    highWaterMark: 16 * 1024 //32KB (chia du lieu thanh nhieu phan bang nhau, moi phan la 32KB)
});

var writeable = fs.createWriteStream(__dirname + "/readme2copy.txt");

readable.on("data", function(chunk) {
    console.log(chunk.length);
    writeable.write(chunk);
})