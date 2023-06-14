const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/checkMiddleware');

const { 
  getRecommendation
} = require('../handler/recommendation/handler');

router.post('/location', authenticateToken, getRecommendation);

module.exports = router;
