const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/index.html'))
  res.end();
})

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/about.html'))
  res.end();
})

app.get('/bookings', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/bookings.html'))
  res.end();
})

app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/contact.html'))
  res.end();
})

app.all('*', (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, 'views/404.html'))
  res.end();
})

app.listen(3000); {
  console.log("Listening on port 3000");
}