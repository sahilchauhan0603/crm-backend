import db from '../config/db.js'

export const addCustomer = (req, res) => {
  const { name, email } = req.body
  const q = 'INSERT INTO customers (name, email) VALUES (?, ?)'
  db.query(q, [name, email], (err, result) => {
    if (err) return res.status(500).json(err)
    res.status(201).json({ message: 'Customer added', id: result.insertId })
  })
}
