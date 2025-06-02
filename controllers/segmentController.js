const segmentService = require('../services/segmentService');

// Create a new segment
const createSegment = async (req, res) => {
  try {
    const result = await segmentService.createSegment(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating segment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all segments
const getAllSegments = async (req, res) => {
  try {
    const result = await segmentService.getAllSegments();
    res.json(result);
  } catch (error) {
    console.error('Error fetching segments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get segment by ID
const getSegmentById = async (req, res) => {
  try {
    const result = await segmentService.getSegmentById(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: 'Segment not found' });
    }
  } catch (error) {
    console.error('Error fetching segment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update segment by ID
const updateSegment = async (req, res) => {
  try {
    const result = await segmentService.updateSegment(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    console.error('Error updating segment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete segment by ID
const deleteSegment = async (req, res) => {
  try {
    const result = await segmentService.deleteSegment(req.params.id);
    res.json(result);
  } catch (error) {
    console.error('Error deleting segment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createSegment,
  getAllSegments,
  getSegmentById,
  updateSegment,
  deleteSegment,
};
