const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    // res.send('Welcome to Home Page');
    res.write('Welcome To Home Page');
    res.send();
})

app.get('/about', (req, res) => {
    res.send('Welcome to About Page');
})

app.get('/contact', (req, res) => {
    res.send('Welcome to Contact Page');
})

app.get('/temp', (req, res) => {
    // res.send('Welcome to Temp Page');
    /* res.send([
        {
            'id':10,
            'name':'Temp Page'
        },
        {
            'id':11,
            'name':'Xipe Tech'
        },
        {
            'id':15,
            'name':'Lucknow'
        }
    ]) */

    res.json([
        {
            'id':1,
            'name':'Temp Page'
        },
        {
            'id':2,
            'name':'Xipe Tech'
        },
        {
            'id':3,
            'name':'Lucknow'
        }
    ])
})

app.get('/akash', (req, res) => {
    res.send('Welcome to Akash Page');
})

app.listen(port, () => {
    console.log("we are listening on port " + port)
})