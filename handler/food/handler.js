const { Food } = require('../../models');


async function getFood(req, res) {
  const id = req.params.id;
  try {
    const food = await Food.findByPk(id, {
      attributes: ['id', 'nama_warung', 'menu', 'kategori', 'harga', 'menu_pic']
    });

    if (!food) {
      return res.status(404).json({
        code: '404',
        status: 'error',
        message: 'food not found'
      });
    }

    return res.status(200).json({
      code: '200',
      status: 'success',
      data: food,
    });

  } catch (error) {
    return res.status(500).json({
      code: '500',
      status: 'error',
      message: 'internal server error'
    });
  }
}

async function getAllFood(req, res) {
  try {
    const food = await Food.findAll({
      attributes: ['id', 'nama_warung', 'menu', 'kategori', 'harga', 'menu_pic']
    });

    return res.status(200).json({
      code: '200',
      status: 'success',
      data: food
    });

  } catch (error) {
    return res.status(500).json({
      code: '500',
      status: 'error',
      message: 'internal server error'
    });
  }
}

module.exports = {
  getFood,
  getAllFood,
};