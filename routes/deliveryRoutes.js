const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/deliveryController');

router.post('/status', deliveryController.receiveStatus);
router.get('/log', deliveryController.getAllLogs);

module.exports = router;
