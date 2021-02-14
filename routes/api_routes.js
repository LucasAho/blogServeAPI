const db = require("../models");
const dbController = require("../controllers/dbController");

function api_routes(app) {
    app.get("/", function (req, res) {
        res.send("Hello World");
    });

    //GET requests
    app.get("/blog/find/all", dbController.findAll);
    app.get("/blog/find/:id", dbController.findById);

    //POST request
    app.post("/blog/new/:apiKey", dbController.create);

    //DELETE requests
    app.delete("/blog/find/:id", dbController.remove)
}

module.exports = api_routes;