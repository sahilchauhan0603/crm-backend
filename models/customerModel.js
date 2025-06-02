const db = require('../config/db');

exports.add = async (data) => {
  const [result] = await db.execute(
    'INSERT INTO customers (name, email, phone, total_spent, visits, last_active) VALUES (?, ?, ?, ?, ?, ?)',
    [data.name, data.email, data.phone, data.total_spent, data.visits, data.last_active]
  );
  return { id: result.insertId, ...data };
};

exports.getAll = async () => {
  const [rows] = await db.execute('SELECT * FROM customers');
  return rows;
};

exports.getById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM customers WHERE id = ?', [id]);
  return rows[0]; // returns undefined if not found
};

exports.getBySegmentRules = async (rulesJson) => {
  const rules = JSON.parse(rulesJson); // Assuming segmentRules is a JSON string
  let query = 'SELECT * FROM customers WHERE 1 = 1';
  let params = [];

  if (rules.minTotalSpent) {
    query += ' AND total_spent >= ?';
    params.push(rules.minTotalSpent);
  }

  if (rules.minVisits) {
    query += ' AND visits >= ?';
    params.push(rules.minVisits);
  }

  if (rules.activeSince) {
    query += ' AND last_active >= ?';
    params.push(rules.activeSince);
  }

  const [rows] = await db.execute(query, params);
  return rows;
};

exports.update = async (email, data) => {
  const query = 'UPDATE customers SET name = ?, phone = ?, total_spent = ?, visits = ?, last_active = ? WHERE email = ?';
  const [result] = await db.execute(query, [data.name, data.phone, data.total_spent, data.visits, data.last_active, email]);
  return result;
};

exports.delete = async (email) => {
  const query = 'DELETE FROM customers WHERE email = ?';
  const [result] = await db.execute(query, [email]);
  return result;
};
