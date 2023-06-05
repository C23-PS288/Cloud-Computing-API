'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('foods', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nama_warung: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    menu: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    kategori: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    harga: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    menu_pic: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    }
   });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('foods');
  }
};
