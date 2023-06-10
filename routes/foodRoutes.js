const express = require('express');
const router = express.Router();

const { 
  getAllFood
} = require('../handler/food/handler');

router.get('/', getAllFood);

module.exports = router;
