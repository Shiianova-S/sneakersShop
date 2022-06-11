const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({
      Cart, SizesOfProduct,
    }) {
      Product.hasMany(Cart, { foreignKey: 'productId' });
      Product.hasMany(SizesOfProduct, { foreignKey: 'productId' }, {
        onDelete: 'cascade',
      });
    }
  }
  Product.init({
    name: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    photo: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
