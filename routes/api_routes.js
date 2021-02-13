//const db = require("../models");
const dbController = require("../controllers/dbController");
const { db } = require("../models/blogPosts");

function api_routes(app) {
    app.get("/", function(req, res) {
        res.send("Hello World");
    });
    app.get("/api/blogPost", dbController.findAll);

    app.post("/api/blogPost/:id", (req,res)=> {
        console.log(req.body.body);
    });



}

module.exports = api_routes;