const express = require('express');
const router = express.Router();
const usersHandler = require('../handler');
const authenticateToken = require('../middleware/checkMiddleware');

router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);
router.post('/logout', usersHandler.logout);
router.get('/protected', authenticateToken, (req, res) => {
  // Akses data pengguna yang ada di req.userData
  const userId = req.user.id;

  // Melakukan logika atau aksi yang diperlukan
  // ...

  res.json({
    message: 'Protected route accessed successfully',
    userId: userId,
  });
});

module.exports = router;
