const express = require('express');
const app = express();

const db = require('./database');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/getBooks", (req, res, next) => {
    fetchAllBooks().then(([rows, fields]) => {
        const data = convertData(rows);
        res.send(data);
    }).catch((err) => {
        console.log(err);
    });
});

const fetchAllBooks = () => {
    return db.execute('SELECT * FROM books');
}

const convertData = (rows) => {
    return rows.map((row) => {
        return {
            name: row.name,
            image: row.image.toString('base64'),
            summary: row.summary
        }
    });
}

app.listen(3000);