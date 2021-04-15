const passport = require("../config/passport");
const db = require("../models");
const dbController = require("../controllers/dbController");
const userController = require("../controllers/userController");
const sessionsController = require("../controllers/sessionsController");

function api_routes(app) {
    app.get("/", function (req, res) {
        res.send("Hello World");
    });
    //////////////////////
    /////Blog Routes//////
    //////////////////////
    //GET requests
    app.get("/blog/find/all", dbController.findAll);
    app.get("/blog/find/:id", dbController.findById);

    //POST request
    app.post("/blog/new/:apiKey", dbController.create);

    //DELETE requests
    app.delete("/blog/find/:id", dbController.remove)
    
    //////////////////////
    /////SignIn Routes////
    //////////////////////

    app.post('/api/login', passport.authenticate('local'), 
        (req, res, next) => {
            res.send(req.user); 
    });
    app.get('/logout', (req, res) => {
        res.send("Logout!");
        req.logout();
    });
    app.post("/api/users", userController.create);

    app.get("/api/users", function (req, res) {
            db.Users.find({}).then(function (data) {
                res.json(data)
            })
        })

    app.get('/api/sessions', sessionsController.findAll);

    app.get('/api/sessions/:id', sessionsController.findBySession);

}

module.exports = api_routes;