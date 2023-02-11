require('dotenv').config();
const path = require('path');
const express = require('express');
const fs = require('fs');
const expressStaticGzip = require('express-static-gzip');
const port = process.env.PORT;
const compression = require('compression');
// Server instance
const app = express();

const shouldCompress = (req, res) => {
  if(req.headers['x-no-compression']) {
    return false;
  }
  return compression.filter(req, res);
}

// Middleware
app.use(express.json());
app.use(compression({filter: shouldCompress}));
app.use(express.static(path.join(__dirname, '../client/dist')));


// route handlers
app.get('/test', (req, res) => {
  res.sendStatus(200);
})

app.get('/*', (req, res) => {
  // res.set('content-encoding', 'gzip');
  // res.set('content-type', 'text/javascript');
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    err && alert('err:', err);
  })
});

app.listen(port, () => {
  console.log(`listening to localhost: ${port}`);
})
