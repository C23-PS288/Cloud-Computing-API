'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('foods', [
      {
        nama_warung: 'Rumah Makan Padang Putra Minang, Ahmad Yani',
        menu: 'Nasi Rendang',
        kategori: 'Rendang',
        harga: 30000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Putra%20Minang_Nasi%20Rendang.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Masakan Padang Sari Minang',
        menu: 'Nasi Rendang Daging',
        kategori: 'Rendang',
        harga: 25000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Sari%20Minang_Nasi%20Rendang%20Daging.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Masakan Padang Sari Minang',
        menu: 'Nasi Rendang Limpa',
        kategori: 'Rendang',
        harga: 25000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Sari%20Minang_Nasi%20Rendang%20Limpa.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Masakan Padang Sari Minang',
        menu: 'Nasi Rendang Hati',
        kategori: 'Rendang',
        harga: 25000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Sari%20Minang_Nasi%20Rendang%20Daging.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },

       {
        nama_warung: 'Masakan Padang Sari Minang',
        menu: 'Sate Padang Pariaman',
        kategori: 'Sate',
        harga: 26000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Sari%20Minang_Sate%20Padang%20Pariaman.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Masakan Padang Sari Minang',
        menu: 'Nasi Ayam Bakar Bumbu Padang',
        kategori: 'Ayam Bakar',
        harga: 29000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Putra%20Minang_Nasi%20Rendang.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Waroenk Prenk (Masakan Padang Modern Harga Pelajar), Mastrip',
        menu: 'Nasi Rendang',
        kategori: 'Rendang',
        harga: 19400,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Waroeng%20Prenk_Nasi%20Rendang.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Waroenk Prenk (Masakan Padang Modern Harga Pelajar), Mastrip',
        menu: 'Nasi Ayam Bakar',
        kategori: 'Ayam Bakar',
        harga: 22500,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Waroeng%20Prenk_Nasi%20Ayam%20Bakar.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Waroenk Prenk (Masakan Padang Modern Harga Pelajar), Mastrip',
        menu: 'Nasi Ayam Rendang',
        kategori: 'Rendang',
        harga: 21500,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Waroeng%20Prenk_Nasi%20Ayam%20Bakar.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Ayam Bakar 99, PB Sudirman',
        menu: 'Nasi Ayam Bakar',
        kategori: 'Ayam Bakar',
        harga: 17600,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/99%20PB%20Sudirman_Nasi%20Ayam%20Bakar.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Ayam Bakar 99, PB Sudirman',
        menu: 'Nasi Ayam Bakar Wijen',
        kategori: 'Ayam Bakar',
        harga: 17600,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/99%20PB%20Sudirman_Nasi%20Ayam%20Bakar%20Wijen.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Ayam Bakar 99, PB Sudirman',
        menu: 'Nasi Ayam Jumbo Bakar',
        kategori: 'Ayam Bakar',
        harga: 25200,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/99%20PB%20Sudirman_Nasi%20Ayam%20Jumbo%20Bakar.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Ayam Bakar 99, PB Sudirman',
        menu: 'Nasi Ayam Jumbo Bakar Wijen',
        kategori: 'Ayam Bakar',
        harga: 25200,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/99%20PB%20Sudirman_Nasi%20Ayam%20Jumbo%20Bakar%20Wijen.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Ayam Bakar 99, PB Sudirman',
        menu: 'Nasi Ayam Kampung Bakar Wijen',
        kategori: 'Ayam Bakar',
        harga: 35600,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/99%20PB%20Sudirman_Nasi%20Ayam%20Kampung%20Bakar%20Wijen.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Ayam Bakar 99, PB Sudirman',
        menu: 'Nasi Ayam Bakar Keju Kemangi',
        kategori: 'Ayam Bakar',
        harga: 18900,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/99%20PB%20Sudirman_Nasi%20Ayam%20Bakar%20Keju%20Kemangi.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'GADO GADO TEMBAAN, Jl. Ahmad Yani 6 No. 10',
        menu: 'Gado Gado',
        kategori: 'Gado Gado',
        harga: 14000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Tembaan_Gado%20gado.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Gado-Gado Cabang Belakang Polres',
        menu: 'Gado Gado Porsi Sedang',
        kategori: 'Gado Gado',
        harga: 14000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Belakang%20Polres_Gado%20Gado%20Cabang.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Gado-Gado dan Lontong Sayur Mbak Ana',
        menu: 'Gado Gado',
        kategori: 'Gado Gado',
        harga: 11000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Mbak%20Ana_Gado%20gado.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Warung Sate Tanjung Bu Ida, Samanhudi',
        menu: 'Sate Ayam',
        kategori: 'Sate',
        harga: 17000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Bu%20Ida_Sate%20Ayam.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Warung Sate Tanjung Bu Ida, Samanhudi',
        menu: 'Sate Ayam Daging / Mentok',
        kategori: 'Sate',
        harga: 17000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Bu%20Ida_Sate%20Ayam%20Campur.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Warung Sate Tanjung Bu Ida, Samanhudi',
        menu: 'Sate Ayam Campur',
        kategori: 'Sate',
        harga: 17000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Bu%20Ida_Sate%20Ayam%20Campur.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Sate Taichan Bangsawan',
        menu: 'Sate Taichan ori',
        kategori: 'Sate',
        harga: 18000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Taichan_Sate%20Taichan%20Jumbo.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Sate Taichan Bangsawan',
        menu: 'Sate Taichan Jumbo',
        kategori: 'Sate',
        harga: 26000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Taichan_Sate%20Taichan%20Jumbo.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Sate Taichan Bangsawan',
        menu: 'Sate Taichan Mix',
        kategori: 'Sate',
        harga: 25000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Taichan_Sate%20Taichan%20Mix.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Sate Taichan Bangsawan',
        menu: 'Sate Kulit Ori',
        kategori: 'Sate',
        harga: 22000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Taichan_Sate%20Kulit%20Ori.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Sate Taichan Bangsawan',
        menu: 'Sate Kulit Kriuk',
        kategori: 'Sate',
        harga: 24000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Taichan_Sate%20Cumi.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Sate Taichan Bangsawan',
        menu: 'Sate Cumi',
        kategori: 'Sate',
        harga: 20000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Taichan_Sate%20Cumi.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Sate Taichan Bangsawan',
        menu: 'Sate usus',
        kategori: 'Sate',
        harga: 20000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Taichan_Sate%20Usus.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Sate Taichan Bangsawan',
        menu: 'Sate Baso',
        kategori: 'Sate',
        harga: 20000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Taichan_Sate%20Baso.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Bakso Solo & Mie Ayam Wonogiri Mz Dwi Belakang Matahari',
        menu: 'Bakso Urat Campur Tahu',
        kategori: 'Bakso',
        harga: 14000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Belakang%20Matahari_Bakso%20Urat%20Campur%20Tahu.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Bakso Solo & Mie Ayam Wonogiri Mz Dwi Belakang Matahari',
        menu: 'Bakso Kecil Campur Tahu',
        kategori: 'Bakso',
        harga: 14000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Belakang%20Matahari_Bakso%20Kecil%20Campur%20Tahu.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Bakso Mas Doel Jember',
        menu: 'Bakso Biasa',
        kategori: 'Bakso',
        harga: 13000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Mas%20Doel_Bakso%20Biasa.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Bakso Mas Doel Jember',
        menu: 'Bakso Campur',
        kategori: 'Bakso',
        harga: 13000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Mas%20Doel_Bakso%20Campur.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Mie Ayam Bakso Wonogiri, Sumbersari',
        menu: 'Bakso Telor',
        kategori: 'Bakso',
        harga: 14000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Wonogiri_Bakso%20Super.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama_warung: 'Mie Ayam Bakso Wonogiri, Sumbersari',
        menu: 'Bakso Super',
        kategori: 'Bakso',
        harga: 15000,
        menu_pic: 'https://storage.googleapis.com/dompet-makanan-bucket/Wonogiri_Bakso%20Super.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('foods', null, {});
  }
};
