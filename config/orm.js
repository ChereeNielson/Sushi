let connection = require("./connection.js");

let orm = {
    all: function(tableInput, cb) {  // cb = call back //
        connection.query("SELECT * FROM " + tableInput + ";", function(err,result) {
            if (err) throw err;
            cb(result)
        })
    }
}

module.exports = orm;