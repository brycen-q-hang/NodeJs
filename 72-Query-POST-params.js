var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var app = express();

var jsonParser = bodyParser.json();
var urlencodeParser = bodyParser.urlencoded({extended: false});

var port = 3000;

app.use("/assets", express.static(__dirname + "/public")); //cho phep nguoi dung truy cap src code duoc public http://localhost:3000/assets/....
app.use(cookieParser());
app.set("view engine", "ejs");

//custom middleware
app.use("/", function(req, res, next) {    
    console.log("Request URL: ", req.url); //in URL dc truy cap den server
    req.requestTime = new Date();
    next();
})


app.get("/", function(req, res) {
    res.render("index");
})

app.get("/user/:id", function(req, res) {
    // req.query.qstr (nhập từ URL http://localhost:3000/user/hang?qstr=123456)
    res.render("user", {ID: req.params.id, queryString: req.query.qstr}); //tra object ve phia client thong qua template engine EJS
})

app.post("/login", urlencodeParser, function(req, res) { 
    res.send("Welcome, " + req.body.username);
    console.log(req.body.username); //Lấy data từ thẻ html <input name="userName" />
    console.log(req.body.password); //Lấy data từ thẻ html <input name="password" />
})

app.post("/loginjson", jsonParser, function(req, res) {
    res.send("OK");
    console.log(req.body.firstName); //Lấy data từ Ajax (gửi lên json cho server)
    console.log(req.body.lastName); //Lấy data từ Ajax (gửi lên json cho server)
})

app.listen(port, function() {
    console.log("Server is listening on PORT: ", port);
})
