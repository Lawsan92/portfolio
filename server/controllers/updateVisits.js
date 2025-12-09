const client = require('../database/Postgres.database.js');

const updateVisits = (visit) => {
  const flagQuery = `select * from visitors where ip=$1`;
  const flagValues = [visit.ip];
  client.query(flagQuery, flagValues)
    .then((res) => {
      let noEntry = res.rows == false;
      if (noEntry) {
        const insertQuery = `insert into visitors values($1, $2, $3, $4, $5)`;
        const insertValues = [visit.ip, visit.country, visit.city, visit.lat, visit.long]
        client.query(insertQuery, insertValues)
      } else {
        const updateQuery = `update visitors set visit_count=visit_count+1 where ip=$1`
        const updateValues = [visit.ip]
        client.query(updateQuery, updateValues)
      }
    })
}

module.exports = updateVisits;