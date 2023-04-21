require('dotenv').config();
const express = require('express');
const app = express();
const visits = require('./routes/visits.js');
const visitRecords = require('./routes/visitRecords.js');
const compression = require('compression');
const path = require('path');
const port = process.env.PORT;
// Server instance
const https = require('https');
const { readFileSync } = require('fs');
const crypto = require('crypto')
const shouldCompress = (req, res) => {
  if(req.headers['x-no-compression']) {
    return false;
  }
  return compression.filter(req, res);
}


//--------------------MIDDLEWARE--------------------*/
app.use((req, res, next) => {
  const nonce = crypto.randomUUID();
  const csp = `default-src 'self' https://maps.googleapis.com; object-src 'self'; script-src 'self' 'unsafe-eval' https://maps.googleapis.com/ 'nonce-${nonce}' 'unsafe-inline'; style-src 'self' 'unsafe-inline' 'strict-dynamic' https://fonts.googleapis.com/ https://fonts.cdnfonts.com/ http://fonts.gstatic.com; img-src 'self' https://res.cloudinary.com/ https://maps.gstatic.com https://maps.googleapis.com data: w3.org/svg/2000; font-src 'self' https://fonts.googleapis.com/ https://fonts.cdnfonts.com/ http://fonts.gstatic.com; base-uri 'self';`;
  res.setHeader('Content-Security-Policy', csp);
  return next();
});
app.use(express.json());
app.use(compression({filter: shouldCompress}));
app.use(express.static(path.join(__dirname, '../client/dist')));


//--------------------ROUTES--------------------*/

https
  .createServer({
    key: readFileSync('pem/key.pem'),
    cert: readFileSync('pem/cert.pem')
  }, app)
  .listen(port || 8080, () => {
    console.log(`listening to localhost: ${port}`);
  })

app.get('/test3000', (req, res) => {
  res.sendStatus(200);
})

app.use('/visits', visits);
app.use('/visitRecords', visitRecords);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    err && alert('err:', err);
  })
});

app.listen(3000, (req, res) => {
  console.log('listening to port 3000...');
})


app.get('/test8080', (req, res) => {
  res.send(200);
});

