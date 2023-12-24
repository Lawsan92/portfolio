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
// app.use((req, res, next) => {
//   const nonce = crypto.randomUUID();
//   const whitelist = {
//     default: 'https://maps.googleapis.com',
//     script: 'https://maps.googleapis.com/ https://*.letsencrypt.org/ */.well-known/acme-challenge/* https://*.googletagmanager.com/',
//     style: 'https://fonts.googleapis.com/ https://fonts.cdnfonts.com/ http://fonts.gstatic.com',
//     img: 'https://res.cloudinary.com/ https://maps.gstatic.com https://maps.googleapis.com data: w3.org/svg/2000',
//     font: 'https://fonts.googleapis.com/ https://fonts.cdnfonts.com/ http://fonts.gstatic.com'
//   }
//   const csp = `default-src 'self' ${whitelist.defaut}; object-src 'self'; script-src 'self' 'unsafe-eval' 'nonce-${nonce}' 'unsafe-inline' ${whitelist.script}; style-src 'self' 'unsafe-inline' 'strict-dynamic' ${whitelist.style}; img-src 'self' ${whitelist.img}; font-src 'self' ${whitelist.font}; base-uri 'self';`;
//   // console.log('csp:', csp);
//   res.setHeader('Content-Security-Policy', csp);
//   return next();
// });
app.use(express.json());
app.use(compression({filter: shouldCompress}));
app.use(express.static(path.join(__dirname, '../public')));


//--------------------ROUTES--------------------*/

https
  .createServer({
    key: readFileSync('/Users/lawrence/portfolio/pem/key.pem'),
    cert: readFileSync('/Users/lawrence/portfolio/pem/cert.pem')
  }, app)
  .listen(8443, () => {
    console.log(`listening to localhost: ${port}`);
  })

app.get('/test3000', (req, res) => {
  res.sendStatus(200);
})

app.use('/visits', visits);
app.use('/visitRecords', visitRecords);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    err && console.log('err:', err.stack);
  })
});

app.listen(port || 3000, (req, res) => {
  console.log('listening to port 3000...');

})

app.get('/test8080', (req, res) => {
  res.send(200);
});

