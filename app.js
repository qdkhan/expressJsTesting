const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
  })

app.get('/about', (req, res) => {
    res.send('Welcome To About Page');
})
  
app.listen(8000, ()=> {
console.log('We are listening at http://localhost:8000');
})