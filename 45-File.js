var fs = require("fs");

var content = fs.readFileSync(__dirname + "/readme.txt", "utf8"); //chay cham, 1 thoi diem chi doc dc 1 file
console.log(content);

fs.readFile(__dirname + "/readme.txt", "utf8", function(err, data) { //chay nhanh, 1 thoi diem co the doc dong thoi nhieu file
    if (err) throw err;
    console.log(data);
});