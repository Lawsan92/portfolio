const { Client } = require('pg');
const config = require('../config/db.conf.js');

console.log('config:', config);

const client = new Client(config);

client
  .connect()
  .then(() => {console.log('connected to postgres database: portfolio')})
  .catch((err) => {console.log('connection error:', err.stack)});