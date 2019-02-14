let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "local host",
    user: "root",
    password: "Sleven76",
    database: "sushi_db"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;