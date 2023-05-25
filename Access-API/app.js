require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const router = require('./routes/routes');

const app = express();
const port = process.env.PORT || '3000';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send({
    message: 'connection success',
  });
});
app.use('/users', router);

app.listen(port, function () {
  console.log(`app listening on port ${port}!`)
});
