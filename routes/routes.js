const express = require('express');
const router = express.Router();
const usersHandler = require('../handler');
const authenticateToken = require('../middleware/checkMiddleware');

router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);
router.get('/:id', usersHandler.getUser);
router.post('/logout', usersHandler.logout);
router.get('/protected', authenticateToken, (req, res) => {
  const userId = req.user.id;

  res.json({
    message: 'Protected route accessed successfully',
    userId: userId,
  });
});

module.exports = router;
