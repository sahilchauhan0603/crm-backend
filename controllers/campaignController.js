const campaignService = require('../services/campaignService');

// Create a new campaign
const createCampaign = async (req, res) => {
  try {
    const result = await campaignService.createCampaign(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating campaign:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all campaigns
const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await campaignService.getAllCampaigns();
    res.json(campaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get campaign by ID
const getCampaignById = async (req, res) => {
  try {
    const result = await campaignService.getCampaignById(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: 'Campaign not found' });
    }
  } catch (error) {
    console.error('Error fetching campaign:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update campaign by ID
const updateCampaign = async (req, res) => {
  try {
    const result = await campaignService.updateCampaign(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    console.error('Error updating campaign:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete campaign by ID
const deleteCampaign = async (req, res) => {
  try {
    const result = await campaignService.deleteCampaign(req.params.id);
    res.json(result);
  } catch (error) {
    console.error('Error deleting campaign:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createCampaign,
  getAllCampaigns,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
};
