const client = require('../database/Postgres.database.js');

const getVisits = (visit) => {
  client
    .query(`select visits from visits`)
    .then((res) => {console.log('visits:', res.rows[0].visits); return res.rows[0].visits;})
    .catch((err) => {console.log('err:', err.stack)});
}

getVisits();

module.exports = getVisits;