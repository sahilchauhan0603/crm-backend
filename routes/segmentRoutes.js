const express = require('express');
const router = express.Router();
const segmentController = require('../controllers/segmentController');

router.post('/', segmentController.createSegment);
router.get('/', segmentController.getAllSegments);
router.get('/:id', segmentController.getSegmentById);

module.exports = router;
