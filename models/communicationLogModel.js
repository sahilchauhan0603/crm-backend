const db = require('../config/db');

exports.log = async ({ campaign_id, customer_id, status }) => {
  // Debug print to ensure no undefined values
  console.log('Logging communication:', { campaign_id, customer_id, status });

  if (!campaign_id || !customer_id || !status) {
    throw new Error('Missing fields: campaign_id, customer_id, or status is undefined/null');
  }

  const [result] = await db.execute(
    'INSERT INTO communication_log (campaign_id, customer_id, status) VALUES (?, ?, ?)',
    [campaign_id, customer_id, status]
  );
  return result;
};

exports.updateStatus = async (id, status) => {
  const [result] = await db.execute(
    'UPDATE communication_log SET status = ? WHERE id = ?',
    [status, id]
  );
  return result;
};

exports.getByCampaign = async (campaign_id) => {
  const [rows] = await db.execute(
    'SELECT * FROM communication_log WHERE campaign_id = ?',
    [campaign_id]
  );
  return rows;
};

exports.update = async (id, data) => {
  const query = 'UPDATE communication_log SET status = ?, sent_at = ? WHERE id = ?';
  const [result] = await db.execute(query, [data.status, data.sent_at, id]);
  return result;
};

exports.delete = async (id) => {
  const query = 'DELETE FROM communication_log WHERE id = ?';
  const [result] = await db.execute(query, [id]);
  return result;
};
