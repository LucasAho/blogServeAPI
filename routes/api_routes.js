const db = require("../models");
const dbController = require("../controllers/dbController");
const wordController = require("../controllers/wordController");

function api_routes(app) {
    app.get("/", function (req, res) {
        res.send("Hello World");
    });
    //////////////////////
    /////Blog Routes//////
    //////////////////////
    //GET requests
    app.get("/api/blog/find/all", dbController.findAll);
    
    app.get("/api/blog/findByTopic/:topic", dbController.findByGenre);

    app.get("/api/blog/findGenres", dbController.findGenres);

    app.get("/api/blog/find/:id", dbController.findById);

    app.get("/api/blog/findData/except/:id", dbController.findDataExcept);

    //DELETE requests
    app.delete("/api/blog/find/:id", dbController.remove)
    
    //////////////////////
    ////ConLang Routes////
    //////////////////////
    app.post("/api/conlang/tukren/wordlist", wordController.create);

    app.get("/api/conlang/tukren/wordlist/:word", wordController.findOne);
    app.get("/api/conlang/tukren/wordlist", wordController.findAll);
}

module.exports = api_routes;