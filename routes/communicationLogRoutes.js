const express = require('express');
const router = express.Router();
const communicationLogController = require('../controllers/communicationLogController');

router.post('/status', communicationLogController.receiveStatus);
router.get('/logs/:campaignId', communicationLogController.getLogs);

module.exports = router;
