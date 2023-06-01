const { User } = require('../models');

module.exports = async (req, res) => {
  try {
  const id = req.params.id;

  const user = await User.findByPk(id, {
    attributes: ['id', 'name', 'email']
  });

  if (!user) {
    return res.status(404).json({
      code: '404',
      status: 'error',
      message: 'user not found'
    });
  }

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