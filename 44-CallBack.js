function readDatabase(callback) {
    var user = {
        name: "Mai Hoa",
    }
    var result = "TFL_OK";
    callback(user, result);
}

readDatabase(function (data, result) {
    console.log("read done callback");
    console.log("Data: ", data);
    console.log("Result: ", result);
})

readDatabase(function (data, result) {
    console.log("read done callback 2 !");
    console.log("User name: ", data.name);
    console.log("Result: ", result);
})