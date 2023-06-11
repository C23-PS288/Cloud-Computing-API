const { Food } = require('../../models');

async function getRecommendation(req, res) {
  const { kategori } = req.body;
  try {
    const foods = await Food.findAll({
      attributes: ['id', 'nama_warung', 'menu', 'kategori', 'harga', 'menu_pic'],
      where: {
        kategori: kategori
      }
    });

    if (!foods) {
      return res.status(404).json({
        code: '404',
        status: 'error',
        message: 'foods not found'
      });
    }

    return res.status(200).json({
      code: '200',
      status: 'success',
      data: foods,
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
  getRecommendation
};