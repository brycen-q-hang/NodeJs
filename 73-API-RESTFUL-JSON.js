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

//API GET
app.get("/api/user/:id", function(req, res) {
    // get data from database
    var result = {
        firstName: "Mai",
        lastName: "Hoa"
    };
    res.json(result);    
})

//API POST
app.post("/api/user", jsonParser, function(req, res) {
    //create new and save to the database
})

//API PUT
app.put("/api/user", jsonParser, function(req, res) {
    //update user and save to the database
})

//API DELETE
app/delete("/api/user", function(req, res) {
    //delete user from database
})


app.listen(port, function() {
    console.log("Server is listening on PORT: ", port);
})
