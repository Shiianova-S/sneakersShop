const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ Product, User, SizesOfProduct }) {
      Cart.belongsTo(User, { foreignKey: 'userId' });
      Cart.belongsTo(Product, { foreignKey: 'productId' });
      Cart.belongsTo(SizesOfProduct, { foreignKey: 'sizeId' });
    }
  }
  Cart.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
      },
    },
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
      },
    },
    sizeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'SizesOfProducts',
      },
    },
    numberOfItems: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
