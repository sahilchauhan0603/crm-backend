const segmentModel = require('../models/segmentModel');

const createSegment = async (data) => {
  return await segmentModel.add(data);
};

const getAllSegments = async () => {
  return await segmentModel.getAll();
};

const getSegmentById = async (id) => {
  return await segmentModel.getById(id);
};

const updateSegment = async (id, data) => {
  return await segmentModel.update(id, data);
};

const deleteSegment = async (id) => {
  return await segmentModel.delete(id);
};

module.exports = {
  createSegment,
  getAllSegments,
  getSegmentById,
  updateSegment,
  deleteSegment,
};
