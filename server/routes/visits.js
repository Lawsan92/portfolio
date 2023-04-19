const express = require('express');
const router = express.Router();
const updateVisits = require('../controllers/updateVisits.js');
const getVisits = require('../controllers/getVisits.js');

//--------------------MIDDLEWARE--------------------*/
router.use((req, res, next) => {
  req.method === 'POST' && console.log('-POST /visits', '@', new Date);
  req.method === 'GET' && console.log('-GET /visits', '@', new Date);
  next();
});

//--------------------ROUTES--------------------*/
router
  .route('/')
  .post((req, res) => { updateVisits() })
  .get((req, res) => {res.send({data: getVisits()})})

module.exports = router;