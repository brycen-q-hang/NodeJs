var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();

var port = 3000;

app.use("/assets", express.static(__dirname + "/public")); //cho phep nguoi dung truy cap src code duoc public http://localhost:3000/assets/....
app.use(cookieParser());


//custom middleware
app.use("/", function(req, res, next) {    
    console.log("Request URL: ", req.url); //in URL dc truy cap den server
    req.requestTime = new Date();
    next();
})


app.get("/", function(req, res) {
    console.log("Cookies: ", req.cookies); //Lấy data cookies
    res.send(`
        <link href="/assets/style.css" rel="stylesheet" type="text/css">
        <h1>Hello Express !!!</h1>
        <p>Request time : ${req.requestTime} </p>
    `)
})

app.get("/user/:id", function(req, res) {
    res.cookie("Username ", req.params.id); //Set data cho cookies
    res.send(`<h1>user: ${req.params.id} </h1>`);
})

app.listen(port, function() {
    console.log("Server is listening on PORT: ", port);
})
