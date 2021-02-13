const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 5002;

const routes = require("./routes/api_routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  // Try line below to fix path issues on Heroku - didn't work
  // app.use(express.static(path.join(__dirname, '/client/build')));

    app.get(`/`, function (req, res) {
    res.sendFile(path.join(__dirname, `client/build`, `index.html`));
    });
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/blogDB'); 

const db = mongoose.connection;

routes(app);
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});