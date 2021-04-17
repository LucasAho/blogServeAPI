const db = require("../models");
const dbController = require("../controllers/dbController");

function api_routes(app) {
    app.get("/", function (req, res) {
        res.send("Hello World");
    });
    //////////////////////
    /////Blog Routes//////
    //////////////////////
    //GET requests
    app.get("/blog/find/all", dbController.findAll);
    
    app.get("/blog/findByTopic/:topic", dbController.findByGenre);
    
    app.get("/blog/find/:id", dbController.findById);

    //DELETE requests
    app.delete("/blog/find/:id", dbController.remove)
    
    //////////////////////
    /////SignIn Routes////
    //////////////////////
}

module.exports = api_routes;