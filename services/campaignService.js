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
  const campaigns = await campaignModel.getAll();

  const campaignsWithStats = await Promise.all(
    campaigns.map(async (campaign) => {
      const stats = await campaignModel.getDeliveryStats(campaign.id);
      return {
        ...campaign,
        deliveryStats: stats,
      };
    })
  );

  return campaignsWithStats;
};

exports.getCampaignById = async (id) => {
  return await campaignModel.getById(id);
};
