const client = require('../database/Postgres.database.js');

const updateVisits = (visit) => {
  console.log('visit:', visit)
  const query = `select * from visitors where ip=$1`;
  const values = [visit.ip, visit.country, visit.city, visit.lat, visit.long];
  client.query(query, ip)
    .then((res) => {console.log('res:', res.rows)})
  // client
  //   .query(`update visits set visits = visits + 1`)
}

module.exports = updateVisits;