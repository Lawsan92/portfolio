const client = require('../database/Postgres.database.js');

const getVisits = (visit) => {
  return client.query(`select * from visitors where ip='136.49.9.64'`)
  .then((res) => {
    console.log('res:', res.rows)
    return res.rows[0].visits;
      console.log('visits:', res.rows[0]);
      })
  .catch((err) => {console.log('err:', err)});
}

module.exports = getVisits;