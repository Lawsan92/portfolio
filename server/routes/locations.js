const express = require('express');
const router = express.Router();
const updateLocations = require('../controllers/updateLocations.js');
const getLocations = require('../controllers/getLocations.js');

//--------------------MIDDLEWARE--------------------*/
router.use((req, res, next) => {
  req.method === 'POST' && console.log('-POST /locations', '@', new Date);
  req.method === 'GET' && console.log('-GET /locations', '@', new Date);
  next();
});

//--------------------ROUTES--------------------*/
router
  .route('/')
  .put((req, res) => { updateLocations() })
  .get((req, res) => {getLocations().then((data) => {res.send({visits: data})});})

module.exports = router;