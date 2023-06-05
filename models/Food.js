module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nama_warung: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    menu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kategori: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    menu_pic: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
      allowNull: false,
    }

  }, {
    tableName: 'foods',
    timestamps: true,
  });

  return Food;
}