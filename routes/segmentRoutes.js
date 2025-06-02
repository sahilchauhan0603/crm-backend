const express = require('express');
const router = express.Router();
const segmentController = require('../controllers/segmentController');

router.post('/', segmentController.createSegment);
router.get('/', segmentController.getAllSegments);
router.get('/:id', segmentController.getSegmentById);
router.put('/:id', segmentController.updateSegment);
router.delete('/:id', segmentController.deleteSegment);
router.post('/rules', segmentController.saveSegmentRules);
router.get('/rules', segmentController.getSegmentRules);

module.exports = router;
