const deliveryService = require('../services/deliveryService');

// Log delivery/communication
const receiveStatus = async (req, res) => {
  try {
    const result = await deliveryService.updateDeliveryStatus(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error updating delivery status:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all logs
const getAllLogs = async (req, res) => {
  try {
    const result = await deliveryService.getAllLogs();
    res.json(result);
  } catch (error) {
    console.error('Error fetching logs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  receiveStatus,
  getAllLogs,
};
