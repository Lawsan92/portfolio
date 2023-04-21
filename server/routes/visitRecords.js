const express = require('express');
const router = express.Router();
const addVisitRecord = require('../controllers/addVisitRecord.js');
const getVisitRecords = require('../controllers/getVisitRecords.js');

//--------------------MIDDLEWARE--------------------*/
router.use((req, res, next) => {
  req.method === 'POST' && console.log('-POST /visits', '@', new Date);
  req.method === 'GET' && console.log('-GET /visits', '@', new Date);
  next();
});

//--------------------ROUTES--------------------*/
router
  .route('/')
  .post((req, res) => { addVisitRecord(); res.send('RECORDS UPDATED!!!') })
  .get((req, res) => {getVisitRecords().then((data) => {res.send({records: data})});})

module.exports = router;