const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.db_host,
    port: process.env.db_port,
    user: process.env.db_user,
    database: process.env.db_name,
    password: process.env.db_password
});

module.exports = pool.promise();