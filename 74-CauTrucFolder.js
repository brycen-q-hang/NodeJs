var express = require("express");
var cookieParser = require("cookie-parser");

var apiController = require("./controllers/apiController");
var homeController = require("./controllers/homeController");


var app = express();

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

apiController(app);
homeController(app);

app.listen(port, function() {
    console.log("Server is listening on PORT: ", port);
})
