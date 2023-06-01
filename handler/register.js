const bcrypt = require('bcrypt');
const { User } = require('../models');
const Validator = require('fastest-validator');
const validation = new Validator();

module.exports = async (req, res) => {
  try {
    const schema = {
      name: 'string|empty:false',
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
  
    if (user) {
      return res.status(409).json({
        code: '409',
        status: 'error',
        message: 'email already used'
      });
    }
  
    const password = await bcrypt.hash(req.body.password, 10);
  
    const data = {
      password,
      name: req.body.name,
      email: req.body.email
    }
  
    const createdUser = await User.create(data);
  
    return res.status(200).json({
      code: '200',
      status: 'success',
      data: createdUser
    });
  } catch (error) {
    return res.status(500).json({
      code: '500',
      status: 'error',
      message: 'internal server error'
    });
  }
}