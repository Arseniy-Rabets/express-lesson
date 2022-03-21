const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Home', (req, res) => {
  res.send('Homeeeeeeee')
})

app.get('/Contacts', (req, res) =>{
  res.send('Contactss')
})

app.get('/Pay', (req, res) =>{
  res.send('Pay')
})

app.listen(port, () => {
  console.log(`example app listening on port ${port}`)
})