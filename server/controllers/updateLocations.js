const client = require('../database/Postgres.database.js');

const updateLocations = (location) => {


console.log('location:', location);

  if (location) {
      const query = `update visits set locations = locations || CONCAT('{"${location}":', COALESCE(locations->>'${location}')::int+1,'}')::jsonb;`;
      const paramter = [location, location];

      client
        .query(query)
  }
}

module.exports = updateLocations;

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