const connection = require('./connection');
const bodyParser = require('body-parser');
require('dotenv').config();
const express = require('express');
var app = express();

app.use(bodyParser.json());
//app.use(express.urlencoded({extended: true}));
//app.use(express.json()) // To parse the incoming requests with JSON payloads

/**
 * INSERT Employee Data
 * 
 * @param {*} req 
 * @param {*} res
 * Author: QD Khan
 */

 app.post('/employees', function(req, res) {
    var form = req.body;
    form = [form.name, form.salary]
    connection.query('INSERT INTO employee(name,salary) values(?)', [form], function(err, result){

        if (err) console.log(err)
        result ? res.send({ status: true, message: `Data Inserted Successfully with id ${result.insertId}` }) : res.send({ status: false, message: 'Something went wrong.' })

    });
})

/**
 * API GET All Employee
 * 
 * @param {*} req 
 * @param {*} res
 * Author: QD Khan
 */

app.get('/employees', function(req, res) {
    connection.query("SELECT * FROM `employee`", function(err, result){

        if (err) console.log(err)
        result ? res.send({ status: true, data: result }) : res.send({ status: false, message: 'Something went wrong.' })

    });
})

/**
 * UPDATE Employee Data With PATCH
 * 
 * @param {*} req 
 * @param {*} res
 * Author: QD Khan
 */

 app.patch('/employees', function(req, res) {
    var form = req.body;
    connection.query('UPDATE `employee` SET ? WHERE id ='+form.id, [form], function(err, result){

        if (err) console.log(err)
        result ? res.send({ status: true, message: "Data Updated Successfully" }) : res.send({ status: false, message: 'Something went wrong.' })

    });
})

/**
 * UPDATE Employee Data With PUT
 * 
 * @param {*} req 
 * @param {*} res
 * Author: QD Khan
 */

 app.put('/employees', function(req, res) {
    var form = req.body;
    connection.query('UPDATE `employee` SET ? WHERE id ='+form.id, [form], function(err, result){

        if (err) console.log(err)
       
        if (result.affectedRows ==0){
            var form = req.body;
            form = [form.name, form.salary]
            connection.query('INSERT INTO employee(name,salary) values(?)', [form], function(err, result){

                if (err) console.log(err)
                result ? res.send({ status: true, message: `Data Inserted Successfully with id ${result.insertId}` }) : res.send({ status: false, message: 'Something went wrong.' })

            });
        }else {
            res.send({status: true, message: `Data Updated Successfully`});
        }

    });
})

/**
 * API GET Single Employee
 * 
 * @param {*} req 
 * @param {*} res
 * Author: QD Khan
 */

app.get('/employee/:id', function(req, res) {
    connection.query("SELECT * FROM `employee` WHERE id=?", [req.params.id], function(err, result){
        if (err) console.log(err)
        result ? res.send({ status: true, data: result }) : res.send({ status: false, message: 'Something went wrong.' })
    });
})

/**
 * API Delete Employee
 * 
 * @param {*} req 
 * @param {*} res
 * Author: QD Khan
 */

 app.delete('/employee/:id', function(req, res) {
    connection.query("DELETE FROM `employee` WHERE id=?", [req.params.id], function(err, result){
        if (err) console.log(err)
        result ? res.send({ status: true, message: 'Employee Deleted'}) : res.send({ status: false, message: 'Something went wrong.' })
    });
})

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
})