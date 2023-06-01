const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: ['id', 'name', 'email']
    });
    
    return res.status(200).json({
      code: '200',
      status: 'success',
      data: user
    });

  } catch (error) {
    return res.status(500).json({
      code: '500',
      status: 'error',
      message: 'internal server error'
    });
  }
}
