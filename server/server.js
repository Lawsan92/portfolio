require('dotenv').config();
const path = require('path');
const express = require('express');
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

app.listen(port, () => {
  console.log(`listening to localhost: ${port}`);
})
