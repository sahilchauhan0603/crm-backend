const db = require('../config/db');

exports.create = async (data) => {
  const [result] = await db.execute(
    'INSERT INTO campaigns (segment_id, message) VALUES (?, ?)',
    [data.segment_id, data.message]
  );
  return { id: result.insertId, ...data };
};

exports.getAll = async () => {
  const [rows] = await db.execute(`
    SELECT c.*, s.name AS segment_name
    FROM campaigns c
    JOIN segments s ON c.segment_id = s.id
    ORDER BY c.created_at DESC
  `);
  return rows;
};

exports.getById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM campaigns WHERE id = ?', [id]);
  return rows[0];
};

exports.log = async ({ campaign_id, customer_id, status, sent_at }) => {
  const [result] = await db.execute(
    `INSERT INTO communication_log (campaign_id, customer_id, status, sent_at)
     VALUES (?, ?, ?, ?)`,
    [campaign_id, customer_id, status, sent_at]
  );
  return result;
};

exports.getDeliveryStats = async (campaignId) => {
  const query = `
    SELECT 
      COUNT(*) AS audience_size,
      SUM(CASE WHEN status = 'SENT' THEN 1 ELSE 0 END) AS sent,
      SUM(CASE WHEN status = 'FAILED' THEN 1 ELSE 0 END) AS failed
    FROM communication_log
    WHERE campaign_id = ?
  `;
  const [rows] = await db.execute(query, [campaignId]);
  return rows[0];
};
