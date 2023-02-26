//import from react library
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require("mysql");
//import sql.js connection
//const SqlCon = require("./connection/sql");

//create express obj 
const app = express();

//middleware for express
app.use(cors());
app.use(bodyParser.json());



const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root@12345",
    database: "wpt"
});

connection.connect();

//default homepage get request
app.get('/student/data', (req, res) => {

    connection.query("select * from student", (err, result) => {
        if (err) {
            res.send("error occured");
        }
        else {
            res.send(result);
        }


    })
});

// //get data from database and send to this url
// app.get("/student/data1", (req, res) => {
//     res.send()
// })

app.listen((4000), () => {
    console.log("running at 4000");
})