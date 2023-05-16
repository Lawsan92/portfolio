const client = require('../database/Postgres.database.js');

const updateVisits = (visit) => {
  client
    .query(`update visits set visits = visits + 1`)
}

module.exports = updateVisits;