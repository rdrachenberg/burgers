var express = require("express");
var app = express();

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burgers = require("../models/burger");
// Create selectAll our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burgers.selectAll(function (burgers_data) {
        var hbsObject = {
            burgers: burgers_data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burgers.insertOne([
        "burger_name", "devoured"
    ], [
            req.body.burger_name, req.body.devoured
            
        ], function () {
            
            res.redirect("/");
        });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.updateOne({
        devoured: true
    }, condition, function () {
        res.redirect("/");
    });
});

// router.delete("/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     burgers.delete(condition, function () {
//         res.redirect("/");
//     });
// });

// Export routes for server.js to use.
module.exports = router;