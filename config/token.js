require('dotenv').config();
const jwt = require('jsonwebtoken');

const {
  ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY,
} = process.env;

exports.generateAccessToken = ({ id, email }) => {
  return jwt.sign({ id,email }, ACCESS_TOKEN_SECRET_KEY, { expiresIn: '1d' });
};

exports.generateRefreshToken = ({ id, email }) => {
  return jwt.sign({ id, email }, REFRESH_TOKEN_SECRET_KEY, { expiresIn: '30d' });
};
