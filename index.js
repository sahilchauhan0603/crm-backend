const express = require('express');
const db = require('./config/db'); // path to your db.js

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('CRM backend running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
