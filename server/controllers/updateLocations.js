const client = require('../database/Postgres.database.js');

const updateVisits = (location) => {

const text = 'INSERT INTO locations (country, email) VALUES($1, $2) RETURNING *'
const values = ['brianc', 'brian.m.carlson@gmail.com']


  client
    .query(`update locations set visits = visits + 1`)
}

module.exports = updateVisits;

/*

// REMOVING COLUMN --------------------------
portfolio=# alter table visits drop column locations;
ALTER TABLE
portfolio=# select * from visits;
 visits
--------
      0
(1 row)

// ADDING COLUMN WITH DEFAULT JSONB--------------------------
portfolio=# select * from visits;
 visits
--------
      0
(1 row)

portfolio=# alter table visits add column locations jsonb not null default '{}';
ALTER TABLE
portfolio=# select * from visits;
 visits | locations
--------+-----------
      0 | {}
(1 row)

// ADDING JSON OBJECT PROPERTY --------------------------
portfolio=# select * from visits;
 visits | locations
--------+-----------
      0 | {}
(1 row)

portfolio=# update visits set locations = jsonb_set(locations, '{Italy}', '1', true);
UPDATE 1
portfolio=# select * from visits;
 visits |  locations
--------+--------------
      0 | {"Italy": 1}
(1 row)

// INCREMENT VALUE JSONB--------------------------
portfolio=# update visits set locations = locations ||
CONCAT('{"Italy":', COALESCE(locations->>'Italy')::int+1,'}')::jsonb;

portfolio=# select * from visits;
 visits |            locations
--------+----------------------------------
      0 | {"Italy": 2, "United States": 1}
(1 row)

update visits set locations = locations || CONCAT('{"United States":', COALESCE(locations->>'United States')::int-1,'}')::jsonb;


*/