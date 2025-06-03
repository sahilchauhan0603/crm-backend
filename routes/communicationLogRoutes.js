const express = require('express');
const router = express.Router();
const communicationLogController = require('../controllers/communicationLogController');

router.post('/status', communicationLogController.receiveStatus);
router.get('/logs/:campaignId', communicationLogController.getLogs);
router.get('/logs', communicationLogController.getAllCommunicationLogs);
router.put('/:id', communicationLogController.updateLog);
router.delete('/:id', communicationLogController.deleteLog);

module.exports = router;
