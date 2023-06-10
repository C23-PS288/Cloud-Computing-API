const { Food } = require('../../models');

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
  getAllFood,
};