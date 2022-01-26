const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/about.html'))
})

app.get('/bookings', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/bookings.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/contact.html'))
})

app.all('*', (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, 'views/404.html'))
})

app.listen(3000); {
  console.log("Listening on port 3000");
}