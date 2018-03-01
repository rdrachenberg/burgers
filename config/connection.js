var mysql = require("mysql");
var jaws = 'mysql://g9ie8iu61hpcw6py:rvtpykrnly9u08wv@nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/vsrh7h88use4zgvq';


if(process.env.JAWDB_URL) {
    connection = mysql.createConnection(process.env.jaws);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
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
