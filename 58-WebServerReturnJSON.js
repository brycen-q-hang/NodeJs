var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'application/json'});

    var obj = {
        firstName: "Hoa",
        lastName: "Mai"
    }
    res.end(JSON.stringify(obj)); //chuyen doi string sang obj: JSON.parse(), chuyen doi obj sang json: JSON.stringfy()
    
}).listen(1337, "127.0.0.1");