require('dotenv').config();

const config = {
  host: process.env.DB_HOST,
  port: 5432,
  database: 'portfolio',
  user: 'lawrence'
};

module.exports = config;