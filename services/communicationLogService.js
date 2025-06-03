const communicationLogModel = require('../models/communicationLogModel');

exports.logCommunication = async (data) => {
  return await communicationLogModel.log(data);
};

exports.updateDeliveryStatus = async ({ campaign_id, customer_id, status }) => {
  return await communicationLogModel.updateStatus(campaign_id, customer_id, status);
};

exports.getLogsForCampaign = async (campaignId) => {
  return await communicationLogModel.getByCampaign(campaignId);
};

exports.updateLog = async (id, data) => {
  return await communicationLogModel.update(id, data);
};

exports.deleteLog = async (id) => {
  return await communicationLogModel.delete(id);
};

// Service to fetch all communication logs
exports.fetchAllLogs = async () => {
  try {
    const logs = await communicationLogModel.findAll();
    return logs;
  } catch (error) {
    console.error('Error fetching communication logs:', error);
    throw error;
  }
};
