const campaignModel = require('../models/campaignModel');
const customerModel = require('../models/customerModel');
const communicationLogModel = require('../models/communicationLogModel');
const campaignDispatcher = require('../utils/campaignDispatcher');

exports.createCampaign = async (data) => {
  const campaign = await campaignModel.create(data);

  const customers = await customerModel.getBySegmentRules(data.segmentRules);
  await campaignDispatcher.dispatchCampaign(campaign, customers);

  return campaign;
};

exports.getAllCampaigns = async () => {
  return await campaignModel.getAll();
};

exports.getCampaignById = async (id) => {
  return await campaignModel.getById(id);
};
