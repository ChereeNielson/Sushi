// Node Dependencies //
let express = require("express");
let router = express.Router();
let sushi = require("../models/sushi.js");

// Extracts the Sequelize Connection from the Models Object //
// let sequelizeConnection = models.sequelize;

router.get("/", function(req, res) {
    sushi.all(function(sushi_data) {
        console.log(sushi_data);
        res.render("index");
    })
})

module.exports = router;