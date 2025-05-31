const communicationLogService = require('../services/communicationLogService');

// Update delivery status of communication logs
const receiveStatus = async (req, res) => {
  try {
    const result = await communicationLogService.updateDeliveryStatus(req.body);
    res.json(result);
  } catch (error) {
    console.error('Error updating delivery status:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get communication logs for a specific campaign
const getLogs = async (req, res) => {
  try {
    const campaignId = req.params.campaignId;
    const result = await communicationLogService.getLogsForCampaign(campaignId);
    res.json(result);
  } catch (error) {
    console.error('Error fetching communication logs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  receiveStatus,
  getLogs
};
