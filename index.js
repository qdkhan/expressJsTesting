const connection = require('./connection');
const bodyParser = require('body-parser');
require('dotenv').config();
const express = require('express');
var app = express();

app.use(bodyParser.json());

app.get('/employee', function(req, res) {
    connection.query("SELECT * FROM `employee`", function(err, data){
        if (err) throw err;
        console.log(data);
    });
})

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
})