require('dotenv').config();
const express = require('express');
const compression = require('compression');
const path = require('path');
const port = process.env.PORT;
// Server instance
const app = express();

const shouldCompress = (req, res) => {
  if(req.headers['x-no-compression']) {
    return false;
  }
  return compression.filter(req, res);
}

const generateHash = () => {
  let [letters, chars] = ['ABCDEFGHIJKLMNOPQRSTUVWXYX', '+/'];
  let hashString = '';
  while (hashString.length < 20) {
    let [randomletter, randomInt, randomChar] = [letters[Math.floor (Math.random() * 23)], Math.floor( Math.random() * 1000), chars[Math.floor(Math.random() * 2)]];
    hashString += randomletter + randomInt + randomChar;
  }
  return hashString;
}

// Middleware
app.use((req, res, next) => {
  const nonce = generateHash();
  const csp = `default-src 'self' https://maps.googleapis.com; object-src 'self'; script-src 'self' https://maps.googleapis.com/ 'nonce-${nonce}'; style-src 'self' 'unsafe-inline' 'strict-dynamic' https://fonts.googleapis.com/ https://fonts.cdnfonts.com/ http://fonts.gstatic.com; img-src 'self' https://res.cloudinary.com/ https://maps.gstatic.com https://maps.googleapis.com data: w3.org/svg/2000; font-src 'self' https://fonts.googleapis.com/ https://fonts.cdnfonts.com/ http://fonts.gstatic.com; base-uri 'self';`;
  res.setHeader('Content-Security-Policy', csp);
  return next();
});
app.use(express.json());
app.use(compression({filter: shouldCompress}));
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

app.listen(port || 3000, () => {
  console.log(`listening to localhost: ${port}`);
})
