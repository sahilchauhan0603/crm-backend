const db = require('../config/db');

const getSummaryData = async (req, res) => {
  try {
    const totalCustomersQuery = 'SELECT COUNT(*) AS total FROM customers';
    const totalCampaignsQuery = 'SELECT COUNT(*) AS total FROM campaigns';
    const totalSegmentsQuery = 'SELECT COUNT(*) AS total FROM segments';
    const totalOrdersQuery = 'SELECT COUNT(*) AS total FROM orders';

    const [totalCustomers] = await db.query(totalCustomersQuery);
    const [totalCampaigns] = await db.query(totalCampaignsQuery);
    const [totalSegments] = await db.query(totalSegmentsQuery);
    const [totalOrders] = await db.query(totalOrdersQuery);

    const summaryData = [
      {
        title: 'Total Customers',
        value: `${totalCustomers[0].total}+`,
        icon: 'FiUsers',
        description: 'Active customers managed in the CRM.'
      },
      {
        title: 'Campaigns Created',
        value: `${totalCampaigns[0].total}+`,
        icon: 'FiMail',
        description: 'Marketing campaigns delivered successfully.'
      },
      {
        title: 'Segments Built',
        value: `${totalSegments[0].total}+`,
        icon: 'FiTarget',
        description: 'Targeted customer segments created.'
      },
      {
        title: 'Orders Processed',
        value: `${totalOrders[0].total}+`,
        icon: 'FiCheckCircle',
        description: 'Orders tracked and fulfilled.'
      }
    ];

    res.json(summaryData);
  } catch (error) {
    console.error('Error fetching summary data:', error);
    res.status(500).json({ error: 'Failed to fetch summary data.' });
  }
};

module.exports = { getSummaryData };
