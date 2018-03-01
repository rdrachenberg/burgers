var mysql = require("mysql");


    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db",
        port: "3008"
    });
    // var connection = mysql.createConnection({
    //     host: 'nj5rh9gto1v5n05t.cbetxkdyhwsb.us - east - 1.rds.amazonaws.com',
    //     user: 'g9ie8iu61hpcw6py',
    //     password: 'rvtpykrnly9u08wv'
    // });

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
