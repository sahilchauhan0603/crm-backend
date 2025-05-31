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
