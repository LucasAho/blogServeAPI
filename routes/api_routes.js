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

    //////////////////////
    ////Email Route//////
    //////////////////////
    app.post("/api/contact", 
        function (req, res) {
            let nodemailer = require('nodemailer');
            const transporter = nodemailer.createTransport({
                port: 465,
                host: "smtp.gmail.com",
                auth: {
                    user: 'creativespectrum99@gmail.com',
                    pass: process.env.CONTACT_PASS,
                },
                secure: true,
            });
            
            const mailData = {
                from: 'creativespectrum99@gmail.com',
                to: 'aholucascode@gmail.com',
                subject: `Message From ${req.body.name}`,
                text: req.body.message + " | Sent from: " + req.body.email,
                html: `<div>${req.body.message}</div><p>Sent from:
                    ${req.body.email}</p>`
            }

            transporter.sendMail(mailData, function (err, info) {
                if(err) {
                    console.log(err)
                } else {
                    console.log(info);
                }
            });

            res.status(200);
            return res.end();
        }
    );
}

module.exports = api_routes;