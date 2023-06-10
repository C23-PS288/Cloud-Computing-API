const express = require('express');
const router = express.Router();

const { 
  getFood,
  getAllFood
} = require('../handler/food/handler');

router.get('/', getAllFood);
router.get('/:id', getFood);

module.exports = router;
