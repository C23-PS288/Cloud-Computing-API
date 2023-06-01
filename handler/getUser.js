const { User } = require('../models');

module.exports = async (req, res) => {
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
}