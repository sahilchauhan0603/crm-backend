const express = require('express');
const router = express.Router();
const { generateMessageSuggestions } = require('../controllers/aiController');

router.post('/message-suggestions', generateMessageSuggestions);

module.exports = router;
