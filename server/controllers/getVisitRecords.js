const client = require('../database/Postgres.database.js');

const getVisitRecords = (visit) => {
  return client.query(`select * from visit_records`)
  .then((res) => {
    return res.rows;
      })
  .catch((err) => {console.log('err:', err.stack)});
}

module.exports = getVisitRecords;