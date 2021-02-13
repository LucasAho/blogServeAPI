const db = require("../models");
const dbController = require("../controllers/dbController");

function api_routes(app) {
    app.get("/", function(req, res) {
        res.send("Hello World");
    });
    app.get("/api/blogPost", dbController.findAll);

    app.post("/api/blogPost/:id", dbController.create)


}

module.exports = api_routes;