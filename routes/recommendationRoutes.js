const express = require('express');
const router = express.Router();

const { 
  getRecommendation
} = require('../handler/recommendation/handler');

router.post('/location', getRecommendation);

module.exports = router;
