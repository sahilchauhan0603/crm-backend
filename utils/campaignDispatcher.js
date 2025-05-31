// utils/campaignDispatcher.js
const communicationLogModel = require('../models/communicationLogModel');

async function dispatchCampaign(campaign, customers) {
  for (const customer of customers) {
    try {
      // Simulate sending message (email, SMS, etc.)
      // Here, a 90% chance of success simulation:
      const success = Math.random() > 0.1;

      // Log the communication status in DB
      await communicationLogModel.log({
        campaign_id: campaign.id,
        customer_id: customer.id,
        status: success ? 'SENT' : 'FAILED',
        sent_at: new Date(),
      });
    } catch (err) {
      console.error(`Failed to log communication for customer ${customer.id}`, err);
    }
  }
}

module.exports = {
  dispatchCampaign,
};
