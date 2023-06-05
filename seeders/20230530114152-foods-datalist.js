'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('foods', [
      {
        nama_warung: 'Warung Niban',
        menu: 'Nasi Pecel',
        kategori: 'Asin',
        harga: 5000,
        menu_pic: '',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('foods', null, {});
  }
};
