var express = require('express');
var router = express.Router();

const usersHandler = require('../handler');

router.get('/', (req, res) => {
  res.send('Dompet Makanan API')
});

router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);

module.exports = router;
