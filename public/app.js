// Require npm modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

// Define app
const app = express();

// Setting up de public folder
app.set("view engine", "ejs");

// Activate bodyParser to fech info from POST request
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

// TODO

app.get("/", function (req, res) {
    res.render("home")
});

app.get("/about", function (req, res) {
    res.render("about")
});

app.get("/recipes", function (req, res) {
    res.render("recipes")
});

app.get("/contact")

// Listening in port 3000
app.listen(3000, function () {
    console.log("Server started on port 3000");
});