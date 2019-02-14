let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sushi_db"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;