require('dotenv').config();
const express = require('express');
const compression = require('compression');
const path = require('path');
const port = process.env.PORT;
// Server instance
const app = express();
const https = require('https');
const { readFileSync } = require('fs');
const crypto = require('crypto')
const shouldCompress = (req, res) => {
  if(req.headers['x-no-compression']) {
    return false;
  }
  return compression.filter(req, res);
}

// Middleware
app.use((req, res, next) => {
  const nonce = crypto.randomUUID();
  const csp = `default-src 'self' https://maps.googleapis.com; object-src 'self'; script-src 'self' 'unsafe-eval' https://maps.googleapis.com/ 'nonce-${nonce}' 'unsafe-inline'; style-src 'self' 'unsafe-inline' 'strict-dynamic' https://fonts.googleapis.com/ https://fonts.cdnfonts.com/ http://fonts.gstatic.com; img-src 'self' https://res.cloudinary.com/ https://maps.gstatic.com https://maps.googleapis.com data: w3.org/svg/2000; font-src 'self' https://fonts.googleapis.com/ https://fonts.cdnfonts.com/ http://fonts.gstatic.com; base-uri 'self';`;
  res.setHeader('Content-Security-Policy', csp);
  return next();
});
app.use(express.json());
app.use(compression({filter: shouldCompress}));
app.use(express.static(path.join(__dirname, '../client/dist')));


// route handlers

https
  .createServer({
    key: readFileSync('pem/key.pem'),
    cert: readFileSync('pem/cert.pem')
  }, app)
  .listen(port || 3000, () => {
    console.log(`listening to localhost: ${port}`);
  })

app.get('/test3000', (req, res) => {
  res.sendStatus(200);
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    err && alert('err:', err);
  })
});


<<<<<<< HEAD

app.listen(8080, (req, res) => {
  console.log('listening to port 8080...');
})


app.get('/test8080', (req, res) => {
  res.send(200);
})
=======
app.listen(3000, (req, res) => {
 console.log('listening to port 3000...');
});
>>>>>>> 181988c17d16f2060beff21485d9fea5ebf18ec1


