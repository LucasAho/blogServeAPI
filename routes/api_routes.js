//const db = require("../models");
const dbController = require("../controllers/dbController");

function api_routes(app) {
    app.get("/", function(req, res) {
        res.send("Hello World");
    });
    app.get("/api/blogPost", dbController.findAll);
}

module.exports = api_routes;