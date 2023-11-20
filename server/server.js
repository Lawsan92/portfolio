require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const visits = require('./routes/visits.js');
const visitRecords = require('./routes/visitRecords.js');
const compression = require('compression');
const path = require('path');
// Server instance
const https = require('https');
const { readFileSync } = require('fs');
const crypto = require('crypto')


//--------------------MIDDLEWARE--------------------*/

  //------CSP
  app.use((req, res, next) => {
  const nonce = crypto.randomUUID();
  const whitelist = {
    default: 'https://maps.googleapis.com',
    script: 'https://maps.googleapis.com/ https://letsencrypt.org/ /.well-known/acme-challenge/',
    style: 'https://fonts.googleapis.com/ https://fonts.cdnfonts.com/ http://fonts.gstatic.com',
    img: 'https://res.cloudinary.com/ https://maps.gstatic.com https://maps.googleapis.com data: w3.org/svg/2000',
    font: 'https://fonts.googleapis.com/ https://fonts.cdnfonts.com/ http://fonts.gstatic.com'
  }
  const csp = `default-src 'self' ${whitelist.defaut}; object-src 'self'; script-src 'self' 'unsafe-eval' 'nonce-${nonce}' 'unsafe-inline' ${whitelist.script}; style-src 'self' 'unsafe-inline' 'strict-dynamic' ${whitelist.style}; img-src 'self' ${whitelist.img}; font-src 'self' ${whitelist.font}; base-uri 'self';`;
  res.setHeader('Content-Security-Policy', csp);
  return next();
});

  //------compression
  const shouldCompress = (req, res) => {
    if(req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  };
  app.use(compression({filter: shouldCompress}));


  //------file serving
  app.use(express.json());
  app.use(cors());
  app.use(compression({filter: shouldCompress}));
  app.use(express.static(path.join(__dirname, '../client/dist')));

//--------------------HTTPS--------------------*/

 try {
  const cred = {
    key: readFileSync(process.env.HTTPS_KEY, 'utf8'),
    cert: readFileSync(process.env.HTTPS_CERT, 'utf8'),
    ca: readFileSync(process.env.HTTPS_CA, 'utf8')	
  };

  const httpsServer = https.createServer(cred, app);

   httpsServer.listen(process.env.PORT_HTTPS, () => {
     console.log(`listening to localhost:${process.env.PORT_HTTPS}`);
   });
  } catch(err){
    console.log('HTTPS err:', err.stack);
  }

//--------------------ROUTES--------------------*/
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

app.listen(process.env.PORT_HTTP, (req, res) => {
  console.log(`listening to port:${process.env.PORT_HTTP}...`);
 
})

app.get('/test8080', (req, res) => {
  res.send(200);
});
