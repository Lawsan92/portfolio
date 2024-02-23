const client = require('../database/Postgres.database.js');

const getVisitorLocation = (visit) => {
  return client.query(`select visits from visits`)
  .then((res) => {
    return res.rows[0].visits;
      console.log('visits:', res.rows[0]);
      })
  .catch((err) => {console.log('err:', err.stack)});
}

module.exports = getVisitorLocation;