const db = require('../config/db');

exports.add = async (data) => {
  const [result] = await db.execute(
    'INSERT INTO orders (customer_id, amount) VALUES (?, ?)',
    [data.customer_id, data.amount]
  );
  return { id: result.insertId, ...data };
};

exports.getByCustomerId = async (customerId) => {
  const [rows] = await db.execute(
    'SELECT * FROM orders WHERE customer_id = ?',
    [customerId]
  );
  return rows;
};

exports.getAll = async () => {
  const [rows] = await db.execute('SELECT * FROM orders');
  return rows;
};

exports.getById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM orders WHERE id = ?', [id]);
  return rows[0];
};
