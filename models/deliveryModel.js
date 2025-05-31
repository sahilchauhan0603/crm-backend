// models/deliveryModel.js
const db = require('../config/db');

// Update delivery status in communication_log or delivery table
exports.updateStatus = async ({ communicationLogId, status, updatedAt }) => {
  const query = `
    UPDATE communication_log
    SET status = ?, updated_at = ?
    WHERE id = ?
  `;
  const [result] = await db.execute(query, [status, updatedAt || new Date(), communicationLogId]);
  return result;
};

// Fetch all communication/delivery logs
exports.fetchAllLogs = async () => {
  const query = `SELECT * FROM communication_log ORDER BY updated_at DESC`;
  const [rows] = await db.execute(query);
  return rows;
};
