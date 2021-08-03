var bodyParser = require("body-parser");

module.exports = function(app)  {
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
    app.post("/api/user", function(req, res) {
        //create new and save to the database
    })

    //API PUT
    app.put("/api/user", function(req, res) {
        //update user and save to the database
    })

    //API DELETE
    app/delete("/api/user", function(req, res) {
        //delete user from database
    })
}