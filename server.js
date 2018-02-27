var connection = require("./config/connection");
var burger = require("./controllers/burgers_controller");
var methodOverride = require("method-override")

var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3008;

var app = express();

app.use(methodOverride("_method"));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});
