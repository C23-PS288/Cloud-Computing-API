const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/checkMiddleware');
const { 
  register, 
  login, 
  getUser, 
  getAllUser, 
  updateUser, 
  logoutUser 
} = require('../handler/user/handler');

router.post('/logout', logoutUser);
router.get('/', authenticateToken, getAllUser);
router.post('/register', register);
router.post('/login', login);
router.get('/:id', getUser);
router.post('/:id', updateUser);

module.exports = router;
