const client = require('../database/Postgres.database.js');

const getLocations = (visit) => {
  return client.query(`select locations from visits`)
  .then((res) => {
    return res.rows[0];
      })
  .catch((err) => {console.log('err:', err.stack)});
}

module.exports = getLocations;