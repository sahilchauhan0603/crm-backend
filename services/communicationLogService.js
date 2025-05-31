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
