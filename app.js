require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const userRouter = require('./routes/userRoutes');
const foodRouter = require('./routes/foodRoutes');

const app = express();
const port = process.env.PORT || '8080';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send({
    message: 'connection success',
  });
});
app.use('/users', userRouter);
app.use('/foods', foodRouter)

app.listen(port, function () {
  console.log(`app listening on port ${port}!`)
});
