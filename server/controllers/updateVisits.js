const client = require('../database/Postgres.database.js');

const updateVisits = (visit) => {

  const flagQuery = `select * from visitors where ip=$1`;
  const flagValues = [visit.ip];
  client.query(flagQuery, flagValues)
    .then((res) => {
      let noEntry = res.rows == false;
      if (noEntry) {
        const insertQuery = `insert into visitors (ip, country, city, lat, long, first_visit, last_visit, session_time, pages)
          values($1, $2, $3, $4, $5, $6, $7, $8, ARRAY[$9])`;
        const insertValues = [visit.ip, visit.country, visit.city, visit.lat, visit.long, visit.date, visit.date, visit['session_time'], Object.keys(visit.pages)]
        client.query(insertQuery, insertValues)
      } else {
        const updateQuery = `update visitors set visit_count=visit_count+1, last_visit=$2, session_time=$3, pages=ARRAY[$4] where ip=$1`
        const updateValues = [visit.ip, visit.date, visit['session_time'], Object.keys(visit.pages)]
        client.query(updateQuery, updateValues)
      }
    })
}

module.exports = updateVisits;