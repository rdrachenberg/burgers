var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "burgers_db",
            port: "3008",
        });
    };
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
