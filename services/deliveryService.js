// services/deliveryService.js
const deliveryModel = require('../models/deliveryModel');

const updateDeliveryStatus = async (statusData) => {
  // statusData should include info like { communicationLogId, status, updatedAt }
  try {
    const result = await deliveryModel.updateStatus(statusData);
    return result;
  } catch (error) {
    throw error;
  }
};

const getAllLogs = async () => {
  try {
    const logs = await deliveryModel.fetchAllLogs();
    return logs;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  updateDeliveryStatus,
  getAllLogs,
};
