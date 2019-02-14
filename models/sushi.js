let orm = require("../config/orm.js");

let sushi = {
    all: function(cb) {
        orm.all("sushi", function(response) {
            cb(response);
        })
    }
}

module.exports = sushi;