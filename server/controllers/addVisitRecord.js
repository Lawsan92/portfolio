const client = require('../database/Postgres.database.js');

const addVisitRecord = (time = new Date + "") => {
  const query = `insert into visit_records (time) values($1)`;
  const values = [time];
  client
    .query(query, values)
}

addVisitRecord()
module.exports = addVisitRecord;