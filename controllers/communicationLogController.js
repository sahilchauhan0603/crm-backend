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

// Update a specific communication log
const updateLog = async (req, res) => {
  try {
    const result = await communicationLogService.updateLog(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    console.error('Error updating communication log:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a specific communication log
const deleteLog = async (req, res) => {
  try {
    const result = await communicationLogService.deleteLog(req.params.id);
    res.json(result);
  } catch (error) {
    console.error('Error deleting communication log:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to fetch all communication logs
const getAllCommunicationLogs = async (req, res) => {
  try {
    const logs = await communicationLogService.fetchAllLogs();
    res.status(200).json(logs);
  } catch (error) {
    console.error('Error fetching communication logs:', error);
    res.status(500).json({ error: 'Failed to fetch communication logs' });
  }
};

module.exports = {
  receiveStatus,
  getLogs,
  updateLog,
  deleteLog,
  getAllCommunicationLogs,
};
