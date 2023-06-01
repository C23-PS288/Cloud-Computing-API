require('dotenv').config();
const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const { User } = require('../models');
const { generateAccessToken, generateRefreshToken } = require('../config/token');
const validation = new Validator();

module.exports = async (req, res) => {
  try {
    const schema = {
      email: 'email|empty:false',
      password: 'string|min:8'
    }
  
    const validate = validation.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).json({
        code: '400',
        status: 'error',
        message: validate
      });
    }
  
    const user = await User.findOne({
      where: { email: req.body.email }
    });
  
    if (!user) {
      return res.status(404).json({
        code: '404',
        status: 'error',
        message: 'user not found'
      });
    }
  
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword) {
      return res.status(404).json({
        code: '404',
        status: 'error',
        message: 'user not found'
      });
    }
  
    const accessToken = generateAccessToken(user.id, user.email);
    const refreshToken = generateRefreshToken(user.id, user.email);
  
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 5 * 60 * 1000,
    });
  
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
  
    res.status(200).json({
      code: '200',
      status: 'success',
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
      code: '500',
      status: 'error',
      message: 'internal server error'
    });
  }
}
