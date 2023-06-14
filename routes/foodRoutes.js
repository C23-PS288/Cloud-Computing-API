const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/checkMiddleware');

const { 
  getFood,
  getAllFood
} = require('../handler/food/handler');

router.get('/', authenticateToken, getAllFood);
router.get('/:id', authenticateToken, getFood);

module.exports = router;
