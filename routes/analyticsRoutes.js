const express = require('express');
const router = express.Router();
const { getSummaryData } = require('../controllers/analyticsController');

router.get('/summary', getSummaryData);

module.exports = router;
