const express = require("express");
//const path = require("path");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 5002;

const routes = require("./routes/api_routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//app.use(express.static("index"));


mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    //console.log("we're in");
});

routes(app);
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});