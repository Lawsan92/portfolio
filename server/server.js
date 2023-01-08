require('dotenv').config();
const path = require('path');
const express = require('express');
const fs = require('fs');
const port = process.env.PORT;
// Server instance
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// route handlers

app.get('/test', (req, res) => {
  res.sendStatus(200);
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    err && alert('err:', err);
  })
});

app.listen(port, () => {
  console.log(`listening to localhost: ${port}`);
})
