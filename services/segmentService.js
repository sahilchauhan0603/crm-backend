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

const saveRules = async (rules) => {
  // Logic to save rules to the database
  const formattedRules = JSON.stringify(rules);
  const result = await segmentModel.add({ name: 'Dynamic Rules', rules: formattedRules });
  return result;
};

const getRules = async () => {
  const rules = await segmentModel.getAllRules();
  if (!rules || rules.length === 0) {
    return { message: 'No rules found', rules: [] };
  }
  return rules;
};

module.exports = {
  createSegment,
  getAllSegments,
  getSegmentById,
  updateSegment,
  deleteSegment,
  saveRules,
  getRules,
};
