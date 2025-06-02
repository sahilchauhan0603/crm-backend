const db = require('../config/db');

exports.add = async (data) => {
  const [result] = await db.execute(
    'INSERT INTO segments (name, rules) VALUES (?, ?)',
    [data.name, JSON.stringify(data.rules)]
  );
  return { id: result.insertId, ...data };
};

exports.getAll = async () => {
  const [rows] = await db.execute('SELECT * FROM segments');
  return rows;
};

exports.getById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM segments WHERE id = ?', [id]);
  return rows[0];
};

exports.update = async (id, data) => {
  const query = 'UPDATE segments SET name = ?, rules = ? WHERE id = ?';
  const [result] = await db.execute(query, [data.name, JSON.stringify(data.rules), id]);
  return result;
};

exports.delete = async (id) => {
  const query = 'DELETE FROM segments WHERE id = ?';
  const [result] = await db.execute(query, [id]);
  return result;
};

exports.getAllRules = async () => {
  const [rows] = await db.execute('SELECT rules FROM segments');
  if (!rows || rows.length === 0) {
    return [];
  }
  return rows.map(row => JSON.parse(row.rules));
};
