const client = require('../database/Postgres.database.js');

const getVisits = (visit) => {
  return client.query(`select visits from visits`)
  .then((res) => {
    return res.rows[0].visits;
      console.log('visits:', res.rows[0]);
      })
  .catch((err) => {console.log('err:', err.stack)});
}

getVisits().then((data) => {console.log('data:', data)});

module.exports = getVisits;