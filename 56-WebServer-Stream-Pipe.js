var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});

    var user = "Mai Hoa";
    var stream = res.replace("{user}", user);
    fs.createReadStream(__dirname + "/index.html").pipe(stream);
    
}).listen(1337, "127.0.0.1");