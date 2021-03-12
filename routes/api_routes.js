const db = require("../models");
const dbController = require("../controllers/dbController");

function api_routes(app) {
    app.get("/", function (req, res) {
        res.send("Hello World");
    });

    //GET requests
    app.get("/blog/find/all", dbController.findAll);
    app.get("/blog/find/recent", dbController.findOne);
    app.get("/blog/find/:id", dbController.findById);
    app.get("/blog/find/:genre", dbController.findByGenre);

    //POST request
    app.post("/blog/new/:apiKey", dbController.create);

    //DELETE requests
    app.delete("/blog/find/:id", dbController.remove)


    //app.get("/conlang/find/all", langController.findAll);
}

module.exports = api_routes;