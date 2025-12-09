const client = require('../database/Postgres.database.js');

const updateVisits = (visit) => {

  console.log('visit:', visit)

  client.query(`select * from visitors where ip='136.49.9.64'`)
  // client
  //   .query(`update visits set visits = visits + 1`)
}

module.exports = updateVisits;